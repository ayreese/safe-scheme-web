import Image from "next/image";
import data from "../data/feature-data.json"
import {Feature} from "@/types/types";
import {FC, JSX} from "react";


const FeatureSection: FC = (): JSX.Element => {
    return (
        <section
            className="feature-section bg-white snap-start w-screen box-content flex flex-col justify-center">
            <h1 className="section-heading text-dark text-center font-black mb-4 lg:mb-8 flex flex-col text-xl lg:text-xxl capitalize">
                <span className={"text-primary"}> Effortless Project </span> & Task Management
            </h1>
            <div
                className="feature-container bg-white | w-full max-w-screen-xl h-[48rem] lg:h-[32rem] mx-auto | overflow-auto snap-y snap-mandatory">
                {data.features.map(({title, description, copy, isBeta, image}: Feature, index: number) => (
                    <div key={index}
                         className="feature-wrapper snap-center | bg-lightGrey | grid lg:grid-cols-2 lg:gap-y-32 gap-x-24 items-center | py-12 px-8 lg:px-24">
                        <div
                            className="content-wrapper lg:col-start-1 lg:justify-self-start |  w-full lg:mb-8 mx-auto | flex flex-col lg:gap-y-4 gap-y-2">
                            {isBeta && (
                                <p className="bg-primary lg:w-fit text-white py-2 px-6 rounded-lg font-semibold lg:text-start text-center">
                                    Coming Soon
                                </p>
                            )}
                            <p className="text-primary font-bold text-md lg:text-lg text-center lg:text-start"> {description} </p>
                            <h1 className="text-dark font-black lg:text-xl text-lg text-center lg:text-start lg:w-3/4 "> {title} </h1>
                            <p className="text-dark text-body lg:text-start text-center"> {copy} </p>
                        </div>
                        <div className="image-container relative w-full h-96 lg:col-start-2 drop-shadow-md">
                            <Image
                                src={image}
                                alt={"image"}
                                fill={true}
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FeatureSection
