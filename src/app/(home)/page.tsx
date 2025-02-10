'use client';
import FeatureSection from "@/components/sections/FeatureSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PreFooter from "@/components/sections/PreFooter";
import LogoCarousel from "@/components/sections/LogoCarousel";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {

    return (
        <div className={"bg-white overflow-hidden flex flex-col"}>
            {/*<NavigationBar/>*/}
            <main className={"snap-y snap-mandatory"}>
                <HeroSection/>
                <LogoCarousel/>
                <FeatureSection/>
                <TestimonialSection/>
                <PreFooter/>
            </main>
            {/*<Footer/>*/}
        </div>
    );
}
