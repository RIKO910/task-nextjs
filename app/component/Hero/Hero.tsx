import React from 'react';
import "./Hero.css"
import ImageBanner from '/public/banner1.webp'
import Image from "next/image";
const Hero = () => {
    return (
            <div className="grid grid-cols-2 col-2 py-9 w-full">
                    <div className="mr-10 w-full">
                        <p className="text-6xl ">Lost and Found Made Easy</p>
                        <p className="py-6 text-2xl">
                            Found or lost something valuable? Post here to help return it.
                        </p>
                        <button className="btn btn-info">POST A FOUND ITEM</button>
                        <button className="btn btn-info ml-4">CLAIM A ITEM</button>
                    </div>
                    <div className="w-full">
                        <Image className="image" src={ImageBanner} alt='logo'/>
                    </div>
                </div>
    );
};

export default Hero;