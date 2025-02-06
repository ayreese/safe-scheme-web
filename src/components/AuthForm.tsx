"use client"
import React, {JSX} from "react"
import {useForm} from "react-hook-form"
import {LoginValues, SignUpValues} from "@/types/types";
import Link from "next/link";


const AuthForm = ({login}: { login: boolean }): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<LoginValues | SignUpValues>({resetOptions: {keepValues: false}});

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        reset()
    });

    return (
        <form onSubmit={onSubmit} className="authForm flex flex-col w-full lg:w-3/4 text-dark">
            <h1 className={"form-title text-xxl font-black capitalize mb-4"}>
                {login ? "Log in" : "Sign Up"}
            </h1>
            {login ?
                <div className={"flex flex-col w-full gap-y-4 justify-center"}>

                    <input {...register("email", {required: true})} placeholder="email"
                           className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
                    {errors?.email && <p>{errors.email.message}</p>}
                    <input {...register("password", {required: true})} placeholder="password"
                           className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
                </div> :
                <div className={"flex flex-col w-full gap-y-8 justify-center"}>
                    <input {...register("firstName", {required: true})} placeholder="First Name" className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
                    {errors?.email && <p>{errors.email.message}</p>}
                    <input {...register("lastName", {required: true})} placeholder="Last Name" className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
                    <input {...register("email")} placeholder="Email" className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
                    {errors?.email && <p>{errors.email.message}</p>}
                    <input {...register("password", {required: true})} placeholder="Password" className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
                </div>}

            <button type="submit"
                    className={"bg-primary w-full items-center px-24 py-1 rounded-lg text-white self-center mt-4"}>{login ? "Log in" : "Sign up with email"}
            </button>
            {login && <Link href={"/"} className={"font-extralight underline mt-4 text-gray-500"}>
                Forgot Password?
            </Link>}
            <p className="terms-of-service font-light text-gray-500 text-base mt-4">
                By continuing with Google, Apple, or Email, you agree to Safe Scheme’s <Link href={"/"}
                      className={"underline"}>Terms of Service
                </Link> and <Link href={"/"} className={"underline"}>
                      Privacy Policy.
                </Link>
            </p>
        </form>
    );
};


export default AuthForm;
