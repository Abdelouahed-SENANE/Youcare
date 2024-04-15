import React from "react";
import Shadow from "../ui/shadow/Shadow";
import ShadowWrapper from "../ui/shadow/ShadowWrapper";
import heroImage from "@/assets/hero.jpg";
import Sticker from "@components/ui/Sticker";

const Hero = ({ children }) => {
    return (
        <ShadowWrapper classes="w-full ">
            <div
                className="relative  p-8 rounded-lg bg-cover object-cover bg-center flex flex-col items-center justify-center"
                style={{
                    height: "50vh",
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="absolute w-full h-full bg-slate-500/60 "></div>
                <div className="relative max-w-[500px] text-center">
                    <h1 className="text-4xl text-balance  text-white ">
                        Discover Events Your Gateway to Exciting Experiences!
                    </h1>
                    <p className="text-sm text-white my-3">
                        Join us for an unforgettable journey 
                        where passion meets innovation. Immerse yourself in
                        captivating talks, interactive workshops, and a vibrant
                        community of enthusiasts. Don't miss out — reserve your
                        spot today
                    </p>
                </div>

                {children}
            </div>
        </ShadowWrapper>
    );
};

export default Hero;
