"use client"
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
    const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth > 768 ? 1 : 0);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            id={"Hero"}
            className={"box-border | flex flex-col justify-center items-center |  h-svh lg:h-[80vh]  |  mb-24 lg:mb-48 mt-12 lg:mt-0 "}>
            <div
                className={"hero-grid-wrapper | box-border bg-white | grid grid-cols-1 lg:grid-cols- 2gap-y-8  lg:gap-y-8 lg:gap-x-8 | lg:px-20 lg:py-10 py-12 px-8 place-items-center lg:place-items-start"}>
                {/*Heading*/}
                <div className={"title desktop-col-1-row-1 mobile-col-1-row-1 | lg:col-start-1 lg:row-start-2 row-start-1"}>
                    <h1 className={"font-semibold text-dark tracking-tighter text-center lg:text-start col-start-1 lg:text-mobile md:text-xxl text-xl capitalize lg:leading-heading-xs"}>
                        Say hello to <span className="whitespace-nowrap">Safe Scheme</span>
                    </h1>
                </div>
                {/*Product description*/}
                <div
                    className={"about | col-start-1 lg:row-start-3 row-start-3 w-full max-w-3xl"}>
                    <p className={"text-center lg:text-left text-body text-dark w-full mb-4"}>
                        Safe Scheme is an intuitive task manager designed to help you organize your personal and
                        professional tasks.
                        It’s optimized for performance, built on AWS for scalability, and designed with security
                        in mind.
                    </p>
                    <p className={"text-center lg:text-left text-body text-dark mb-3 | lg:row-start-4"}>
                        Whether you’re working on individual projects or collaborating with teams, Safe Scheme
                        provides
                        a seamless experience to stay organized.
                    </p>
                    <p className={"text-gray-500 text-[14px] text-center lg:text-start"}>300+ accounts with a ✭✭✭✭✭ rating</p>
                </div>
                {/*Create account button*/}
                <div
                    className={"signup | desktop-col-1-row-3 mobile-col-1-row-4 | col-start-1 lg:row-start-4 row-start-4"}>
                    <Link
                        href="/signup"
                        className="inline-block py-4 px-8 bg-primary rounded-full text-white font-semibold hover:bg-primaryLight transition"
                    >
                        Get Started for Free
                    </Link>
                </div>
                {/*Hero image*/}
                <div
                    className={"hero-image-container relative | lg:col-start-2 lg:row-start-1 lg:row-span-5 | col-start-1 row-start-2 drop-shadow-fi | lg:w-full lg:h-auto my-12"}>
                    <Image
                        src={windowSize === 1 ? "/hero.png" : "/hero-mobile.png"}
                        alt="Hero Background"
                        // fill={true}
                        width={windowSize === 1 ? 720 : 260}
                        height={windowSize === 1 ? 300 : 90}
                        className={"hero-image"}
                        style={{objectFit: "contain"}}
                    />
                </div>
            </div>

        </section>
    )
}

export default HeroSection;