import { useState } from "react";
import { Button } from "./../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { SignupInput } from "@lokeshpabboji/medium-common";
import { BACKEND_URL } from "../config"
import { LabelledInputBox } from "./LabelledInputBox";

export function Auth({type} : {type : "signin" | "signup"}){
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name : '',
        email : '',
        password : ''
    })

    const navigate = useNavigate();

    async function sendRequest(){
        try {
            const response = await axios.post(`${BACKEND_URL}user/${type === 'signup' ? 'signup' : 'signin'}`, postInputs);
            const jwt = await response.data.jwt;
            localStorage.setItem("token", "Bearer "+jwt);
            navigate("/home")
        } catch (e) {
            alert("error while signing up")
            // you alert the user if the request has failed here
        }
    }

    return (
        <div className="h-screen flex justify-center">
            {/* {JSON.stringify(postInputs)} */}
            <div className="flex flex-col justify-center">
                <div className="bg-slate-100 p-7 rounded-xl shadow-lg hover:shadow-xl">
                    <div className="text-4xl text-center font-bold pt-5">{type === "signup" ? "Create an account" : "Signin to your account"}</div>
                    <div className="text-center text-slate-500 mb-5 mt-2">
                        {type === "signup" ? "Already have an account?" : "Don't have an account?"} 
                        <Link className="underline pl-1 cursor-pointer" to={type === 'signup' ? "/signin" : "/signup"}>
                            {type === 'signup' ? "Signin" : "Signup"}
                        </Link>
                    </div>
                    {type === "signup" ? <LabelledInputBox label={"Username"} placeholder={"user420"} type={'text'} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name : e.target.value
                        }))
                        // you can do this as well
                        // setPostInputs({
                        //     ...postInputs,
                        //     name : e.target.value
                        // })
                    }}></LabelledInputBox> : null}
                    <LabelledInputBox label={"Email"} placeholder={"user101@example.com"} type={"text"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email : e.target.value
                        }))
                    }}></LabelledInputBox>
                    <LabelledInputBox label={"Password"} placeholder={"********"} type={"password"} onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password : e.target.value
                        }))
                    }}></LabelledInputBox>
                    <Button onClick={sendRequest} text={type === 'signup' ? "Signup" : "Signin"}></Button>
                </div>
            </div>
        </div>
    )
}

