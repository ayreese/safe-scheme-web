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
                className="flex justify-between items-center relative bg-white text-white display w-screen py-16 lg:px-20 px-8">
            {/*Logo and home button*/}
            <div id={"logoContainer"} className="flex items-center gap-4 justify-items-end w-screen">
                <Link href="/public" className=" font-semibold text-dark">
                    <div className="flex items-center gap-4 ">
                        <Image src="/logo.png" alt="Safe Scheme Logo" width={40} height={40}
                               style={{objectFit: "contain", width: "100", height: "auto"}}/>
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
                className={`flex flex-col justify-between items-center gap-y-8 lg:flex lg:flex-row lg:justify-end gap-x-16 | absolute top-full left-0 right-0 lg:top-auto lg:left-auto lg:right-auto lg:relative | lg:bg-none max-w-full z-50 bg-white w-screen pb-8  ${isOpen ? 'block' : 'hidden'}`}
            >

                <Link href="/public#Features" className="font-semibold text-dark">
                    Features
                </Link>
                <Link href="/public#Testimonies" className="font-semibold text-dark">
                    Testimonials
                </Link>
                <Link
                    href="/login"
                    className="font-extrabold text-dark"
                >
                    Login
                </Link>
                <Link
                    href="/signup"
                    className="py-4 px-8 bg-primary rounded-full text-white whitespace-nowrap font-semibold hover:bg-primaryLight transition capitalize"
                >
                    Start for free
                </Link>
            </nav>
        </header>
    )
}

export default NavigationBar;