import React, {JSX} from "react";
import SignUp from "@/components/auth/SignUp"
import SignIn from "@/components/auth/SignIn";
import { useRouter } from "next/navigation";

const AuthForm = ({ login }: { login: boolean }): JSX.Element => {
    const router = useRouter();

    return (
        <div className="authForm">
            {/*<h1 className="form-title">{login ? "Log in" : "Sign Up"}</h1>*/}
            {login ? <SignIn router={router} /> : <SignUp router={router} />}
        </div>
    );
};

export default AuthForm;

