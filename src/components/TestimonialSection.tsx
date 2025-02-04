import Image from 'next/image';
import data from "../data/testimonials.json";
import {Testimonial} from "@/types/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import {testimonialSwiperConfig} from "@/configuration/swiperConfig";
import 'swiper/css/bundle';

const TestimonialSection = ()=> {
    const testimonials:Testimonial[] = data.testimonials;
    return (
        <section id="Testimonies" className="testimonial-carousel relative mx-auto py-36 bg-white">
            {/* Heading */}
            <div className="Testimonial-Heading flex lg:pl-8 justify-center mb-16">
                <h2 className="font-black lg:text-xxl text-xl text-center capitalize text-dark flex flex-col leading-tight">
                   <span className={"text-primary"}> Customer Stories </span>& Experiences
                </h2>
            </div>
            {/* Swiper Container */}
            <Swiper {...testimonialSwiperConfig}>
                {/* Testimonial Data */}
                {testimonials.map(({testimonial, name, role, image}: Testimonial, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="feature-card box-content bg-neutralLight drop-shadow-custom-purple p-8 flex flex-col items-center rounded-xl">
                                {/* Image Container*/}
                                <div
                                    className="image-container relative w-24 h-24 rounded-full border-4 border-primary overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={name}
                                        fill={true}
                                        loading="lazy"
                                        style={{objectFit: "cover", objectPosition: "center"}}
                                        sizes="(max-width: 768px) 100vw"
                                    />
                                </div>
                                {/* Attributes */}
                                <div className="feature-description text-center">
                                    <p className="text-white text-lg italic font-medium">{testimonial}</p>
                                    <p className="text-primary font-bold text-xl mt-3">{name}</p>
                                    <p className="text-white font-light text-sm">{role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default TestimonialSection;
