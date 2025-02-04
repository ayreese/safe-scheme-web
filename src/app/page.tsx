'use client';
import Image from "next/image";
// import Link from "next/link";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import {useEffect, useState} from "react";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import PreFooter from "@/components/PreFooter";
import LogoCarousel from "@/components/LogoCarousel";

export default function Home() {
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
        <div className={"bg-white overflow-hidden flex flex-col"}>
            <NavigationBar/>
            <main className={"snap-y snap-mandatory"}>
                <section
                    id={"Hero"}
                    className="box-border snap-center grid grid-cols-auto gap-y-8 lg:grid-cols-2 lg:gap-y-2 lg:gap-x-8 lg:px-20 lg:py-10 py-12 px-8 bg-white items-center lg:justify-items-start justify-items-center">
                    {/*Heading*/}
                    <h1 className="z-0 font-semibold text-dark tracking-tighter text-center col-start-1 row-start-1 xl:text-desktop lg:text-tablet lg:text-start text-xl capitalize lg:row-start-2 lg:leading-heading-xs">
                        Say hello to <span className="whitespace-nowrap">Safe Scheme</span>
                    </h1>
                    {/*Product description*/}
                    <div className="description-hero lg:row-start-3 w-full max-w-3xl">
                        <p className="text-center lg:text-left text-body text-dark w-full mb-4">
                            Safe Scheme is an intuitive task manager designed to help you organize your personal and
                            professional tasks.
                            It’s optimized for performance, built on AWS for scalability, and designed with security
                            in mind.
                        </p>
                        <p className="text-center lg:text-left text-body text-dark">
                            Whether you’re working on individual projects or collaborating with teams, Safe Scheme
                            provides
                            a seamless experience to stay organized.
                        </p>
                    </div>
                    {/*Create account button*/}
                    <div className="col-start-1 lg:row-start-4">
                        {/*<Link*/}
                        {/*    href="/signup"*/}
                        {/*    className="inline-block py-4 px-8 bg-primary rounded-full text-white font-semibold hover:bg-primaryLight transition"*/}
                        {/*>*/}
                        {/*    Get Started for Free*/}
                        {/*</Link>*/}
                    </div>
                    {/*Hero image*/}
                    <div
                        className="image-container lg:col-start-2 lg:row-start-1 lg:row-span-5 row-start-2 drop-shadow-fi">
                        <Image
                            src={windowSize === 1 ? "/hero.png" : "/hero-mobile.png"}
                            alt="Hero Background"
                            width={720}
                            height={400}
                            className="hero-image"
                            style={{objectFit: "contain", width: "100%", height: "auto"}}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </section>
                <LogoCarousel/>
                <FeatureSection/>
                <TestimonialSection/>
                <PreFooter/>
            </main>
            <Footer/>
        </div>
    );
}
