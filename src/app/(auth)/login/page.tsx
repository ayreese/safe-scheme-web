"use client"
import AuthForm from "@/components/auth/AuthForm";
import {FC, JSX} from "react";

const LoginPage:FC = ():JSX.Element => {
    return <AuthForm login={true} />;
};

export default LoginPage;
