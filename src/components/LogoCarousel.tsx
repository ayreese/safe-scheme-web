import {JSX, FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {logoSwiperConfig} from "@/configuration/swiperConfig";
import Image from "next/image";

const images: string[] = [
    "/brandNew.svg",
    "/xeon.svg",
    "/ge.svg",
    "/genz.svg",
];

const LogoCarousel: FC = (): JSX.Element => {
    return (
        <section className="my-32 flex flex-col justify-center">
            <h1 className={"capitalize text-center text-xxl font-black text-dark mb-4"}><span
                className={"text-primary"}>Trusted</span> By</h1>
            <div className={"bg-lightGrey h-56 flex items-center"}>
                <Swiper {...logoSwiperConfig}>
                    {images.map((image: string, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-24 drop-shadow-md">
                                <Image
                                    src={image}
                                    fill={true}
                                    alt={`Slide ${index + 1}`}
                                    style={{objectFit: "contain", objectPosition: "center"}}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LogoCarousel;
