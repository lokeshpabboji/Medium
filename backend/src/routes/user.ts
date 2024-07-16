import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@lokeshpabboji/medium-common"

export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_SECRET : string;
    }
}>();

userRouter.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();
    // zod validation
    const { success } = signupInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message : "invalid inputs"});
    }
    // password hashing

    try {
        const user = await prisma.user.create({
            data : {
                email : body.email,
                password : body.password,
                name: body.name ? body.name : undefined,
            }
        });
        const jwt = await sign({id : user.id}, c.env.JWT_SECRET);
        c.status(200);
        return c.json({jwt})
    } catch (error) {
        c.status(403);
        return c.json({error :error})
    }
})

userRouter.post('/signin', async (c) => {
    
    // zod validation
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({message : "invalid inputs"})
    }
    
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    // password hashing to be done
    try {
        const user = await prisma.user.findUnique({
            where : {
                email : body.email
            }
        })
        if(!user){
            c.status(403)
            return c.json({error : 'user not found'})
        }
        if(user.password !== body.password){
            c.status(403)
            return c.json({error : 'incorrect password'})
        }
        const jwt = await sign({id : user.id}, c.env.JWT_SECRET);
        return c.json({jwt})
    } catch (error) {
        c.status(403);
        return c.json({error : 'error while signing in'})
    }
})

