import type { Metadata } from "next";
import "../globals.css"
import NavigationBar from "@/components/sections/NavigationBar";
import Image from "next/image";


export const metadata: Metadata = {
    title: "Login",
    description: "The best task manager",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={"bg-white h-svh"}>
        <NavigationBar/>
        <div className="bg-white h-3/4 max-w-screen-xl mx-auto flex flex-col justify-center px-8 lg:px-0 min-w-96">
            <div className="authContainer flex lg:flex-row flex-col justify-center items-center bg-white gap-x-8">

                <div className="child-container basis-full">
                    {children}
                </div>
                <div className={"image-container relative basis-full w-full h-80"}>
                    <Image src={"/hero.png"}
                           alt={"hero image"}
                           fill={true}
                           style={{objectFit: "contain"}}
                    />
                </div>

            </div>
        </div>
        {/*{children}*/}
        </body>
        </html>
    );
}
