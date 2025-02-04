'use client'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <header id={"navigationHeader"}
                className="flex justify-between items-center relative bg-white text-white display w-screen py-8 lg:px-20 px-8">
            {/*Logo and home button*/}
            <div id={"logoContainer"} className="flex items-center gap-4 justify-items-end w-screen">
                <Link href="/" className=" font-semibold text-dark">
                    <div className="flex items-center gap-4 ">
                        <Image src="/logo.png" alt="Safe Scheme Logo" width={40} height={40}
                               style={{objectFit: "contain", width: "auto", height: "auto"}}/>
                        <h1 className="text-lg lg:text-xxl font-semibold text-dark">Safe Scheme</h1>
                    </div>
                </Link>
            </div>

            {/*Mobile Menu Button*/}
            <FontAwesomeIcon
                icon={isOpen ? faX : faBars}
                size="xl"
                style={{color: 'black'}}
                className="z-100 transform transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
            />

            {/*Navigation Bar Nav Links*/}
            <nav
                id="navigationContainer"
                className={`w-screen lg:flex lg:flex-row lg:justify-between lg:top-auto lg:left-auto lg:right-auto lg:relative lg:bg-none max-w-full flex flex-col justify-between z-50 bg-white items-center absolute top-full left-0 right-0 gap-y-8 py-10 ${isOpen ? 'block' : 'hidden'}`}
            >

                {/*<Link href="#Features" className="font-semibold text-dark">*/}
                {/*    Features*/}
                {/*</Link>*/}
                {/*<Link href="#Testimonials" className="font-semibold text-dark">*/}
                {/*    Testimonials*/}
                {/*</Link>*/}
                {/*<Link*/}
                {/*    href="/login"*/}
                {/*    className="font-extrabold text-dark"*/}
                {/*>*/}
                {/*    Login*/}
                {/*</Link>*/}
                {/*<Link*/}
                {/*    href="/signup"*/}
                {/*    className="py-4 px-8 bg-primary rounded-full text-white font-semibold hover:bg-primaryLight transition capitalize"*/}
                {/*>*/}
                {/*    Start for free*/}
                {/*</Link>*/}
            </nav>
        </header>
    )
}

export default NavigationBar;