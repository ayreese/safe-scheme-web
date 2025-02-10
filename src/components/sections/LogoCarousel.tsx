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
        <section className="flex flex-col justify-center | mb-48">
            <h1 className={"capitalize text-center text-xxl font-black text-dark mb-4"}><span
                className={"text-primary"}>Trusted</span> By</h1>
            <div className={"box-border"}>
                <Swiper {...logoSwiperConfig} className={"bg-lightGrey"}>
                    {images.map((image: string, index: number) => (
                        <SwiperSlide key={index} className={"py-16"}>
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
