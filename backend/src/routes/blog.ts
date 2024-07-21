import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@lokeshpabboji/medium-common"

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string,
        JWT_SECRET : string
    },
    Variables : {
        userId : string
    }
}>();

blogRouter.use("/*",async (c, next) => {
    // get the header
    const jwt = c.req.header('authorization') || "";
    // verify the header 
    if(!jwt){
      c.status(401)
      return c.json({error : 'Unauthorized'})
    }
    const token = jwt.split(' ')[1];
    try {
        const payload = await verify(token, c.env.JWT_SECRET);
        if(payload){
            // @ts-ignore
            c.set("userId", payload.id);
        }
    } catch (e) {
        c.status(401)
        return c.json({error : 'Unauthorized'})
    }
    // if header is correct, we can proceed
    // if not, we return 403 code
    await next();
  })

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const authorId = c.get("userId");
    const { success } = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message : "invalid inputs"})
    }
    
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.create({
            data : {
                title : body.title,
                content : body.content,
                authorId : authorId
            }
        })
        return c.json({
            id : blog.id,
        })
    } catch (e) {
        c.status(411);
        return c.json({error : "error while posting the blog"})
    }
})

blogRouter.put('/', async (c) => {

    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({message : "invalid inputs"})
    }

    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.post.update({
            where : {
                id : body.id
            },
            data : {
                title : body.title,
                content : body.content
            }
        })
        if(!blog){
            return c.json({
                error : "invalid blog id"
            })
        }
        return c.json({
            blog
        })
    } catch (e) {
        c.status(411);
        return c.json({error : "error while modifying the blog"})
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blogs = await prisma.post.findMany({
            select : {
                content : true,
                title : true,
                id : true,
                author : {
                    select :{
                        name : true
                    }
                }
            }
        });
        return c.json({blogs})
    } catch (e) {
        return c.json({error : 'error while fetching the blogs'})
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const id = c.req.param("id")
    try {
        const blog = await prisma.post.findUnique({
            where : {
                id : id
            }, 
            select : {
                content : true,
                title : true,
                id : true,
                author : {
                    select :{
                        name : true
                    }
                }
            }
        })
        if(!blog){
            return c.json({
                error : "invalid blog id"
            })
        }
        return c.json({
            blog
        })
    } catch (error) {
        return c.json({error : 'error while fetching the blog post'});
    }
})
