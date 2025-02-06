'use client';
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import PreFooter from "@/components/PreFooter";
import LogoCarousel from "@/components/LogoCarousel";
import HeroSection from "@/components/HeroSection";

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
