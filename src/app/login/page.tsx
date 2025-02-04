// src/app/login/page.tsx

import AuthForm from "@/components/AuthForm";
import NavigationBar from "@/components/NavigationBar";
import Image from "next/image";

const LoginPage = () => {
    return (
        <div className="bg-white h-svh flex flex-col justify-evenly">
            <NavigationBar/>
            <div className="authContainer flex flex-col justify-center items-center bg-white h-full">
                <div className="authTitleWrapper  text-start">
                    <h1 className="text-xl md:text-4xl font-semibold uppercase text-dark text-start">Login</h1>
                </div>
                <AuthForm/>
                <div className={"image-container relative"}>
                    <Image src={"/hero.png"}
                           alt={"hero image"}
                           fill={true}
                           style={{objectFit: "contain"}}
                    />
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
