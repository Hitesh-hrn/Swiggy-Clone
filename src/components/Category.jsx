import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Category() {
    const [slide, setSlide] = useState(12);

    const image = [
        "/Images/North_Indian_4.jpeg",
        "/Images/Pizza.jpeg",
        "/Images/Noodles.jpeg",
        "/Images/Pasta.jpeg",
        "/Images/Paratha.jpeg",
        "/Images/Biryani_2.jpeg",
        "/Images/Burger.jpeg",
        "/Images/Cakes.jpeg",
        "/Images/Chinese.jpeg",
        "/Images/Chole_Bature.jpeg",
        "/Images/Dosa.jpeg",
        "/Images/Gulab_jamun.jpeg",
        "/Images/Ice_creams.jpeg",
        "/Images/Idli.jpeg",
        "/Images/Khichdi.jpeg",
        "/Images/Poori.jpeg",
        "/Images/Pure_veg.jpeg",
        "/Images/Rolls.jpeg",
        "/Images/Salad.jpeg",
        "/Images/South_Indian_4.jpeg",
    ]

    const nextSlide = () => {
        if (image.length - 8 === slide) return false
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide - 3);
    }


    return (
        <div className='max-w-[1200px] mx-auto px-2 mt-6'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>
                    HITEESH, what's on your mind?
                </div>
                <div className='flex'>
                    <div className='flex'>
                        <div
                            className={`flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${slide === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                                }`}
                            onClick={slide === 0 ? null : prevSlide}
                        >
                            <FaArrowLeft />
                        </div>

                        <div
                            className={`flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${slide === image.length - 8 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                                }`}
                            onClick={slide === image.length - 8 ? null : nextSlide}
                        >
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex overflow-hidden '>
                {
                    image.map((image, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }} className='duration-500 shrink-0'>
                                <img
                                    src={image}
                                    alt='food'
                                    className='w-[150px]'
                                />
                            </div>
                        )
                    })
                }
            </div>
            <hr className='my-4 border-[1px]'></hr>
        </div>
    )
}
