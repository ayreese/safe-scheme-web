"use client"
import AuthForm from "@/components/auth/AuthForm";
import React, {FC, JSX} from "react";

const SignUpPage:FC = ():JSX.Element => {
    return <AuthForm login={false} />

};

export default SignUpPage;
