"use client"
import React from "react"
import {useForm} from "react-hook-form"
import {ConfirmationCode} from "@/types/types";
import Link from "next/link";
import {confirmation} from "@/configuration/authConfig";
import {create} from "@/components/Cookies"
import {router} from "next/client";

const ConfirmationForm = ({userName}: { userName: string }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {},
    } = useForm<ConfirmationCode>();

    const onSubmit = handleSubmit(async (data: ConfirmationCode): Promise<void> => {
        try {
            console.log("The data", data);
            console.log("The User", decodeURIComponent(userName));
            const response = await confirmation(data.code, decodeURIComponent(userName))
            if (response && response.Session) {
                await create("token", response.Session);
                await router.push("/login");
            }
            reset()
        } catch (error) {
            console.log("There was an error:", error);
        }

    });

    return (
        <form onSubmit={onSubmit} className="authForm flex flex-col w-full lg:w-3/4 text-dark">
            <h1 className={"form-title text-xxl font-black capitalize mb-4"}>
                Check your email for a confirmation code.
            </h1>
            <div className={"flex flex-col w-full gap-y-4 justify-center"}>

                <input {...register("code", {required: true})} placeholder="code"
                       className={"focus:outline-none border-b border-gray-400 py-4 opacity-50"}/>
            </div>

            <button type="submit"
                    className={"bg-primary w-full items-center px-24 py-1 rounded-lg text-white self-center mt-4"}>Continue
            </button>
            <p className="terms-of-service font-light text-gray-500 text-base mt-4">
                By continuing you agree to Safe Scheme’s <Link href={"/"}
                                                               className={"underline"}>Terms
                of Service
            </Link> and <Link href={"/"} className={"underline"}>
                Privacy Policy.
            </Link>
            </p>
        </form>
    );
};


export default ConfirmationForm;
