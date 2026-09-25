import React from 'react'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Card from './Card.jsx'

export default function TopRest() {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        if (restaurants.length - 4 <= slide) return
        setSlide(slide + 3)
    }

    const prevSlide = () => {
        if (slide == 0) return
        setSlide(slide - 3)
    }

    const restaurants = [
        {
            "image": "1.jpeg",
            "offer": "Items at ₹179",
            "title": "Pizza Hut",
            "rating": 4.2,
            "minTime": 30,
            "maxTime": 40,
            "name": "Pizzas",
            "place": "New Jodhpur"
        },
        {
            "image": "2.jpeg",
            "offer": "₹50 OFF ABOVE ₹199",
            "title": "Janta Sweet Home",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Sweets,South Indian",
            "place": "Shastri Nagar"
        },
        {
            "image": "3.jpeg",
            "offer": "₹85 OFF ABOVE ₹149",
            "title": "Parihaar Bhojnalay",
            "rating": 4.3,
            "minTime": 35,
            "maxTime": 40,
            "name": "North India, Thalis",
            "place": "Sardarpura"
        },
        {
            "image": "4.jpeg",
            "offer": "₹70 OFF ABOVE ₹149",
            "title": "Kwality Walls Frozen",
            "rating": 4.5,
            "minTime": 25,
            "maxTime": 25,
            "name": "Desserts,Ice Cream",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "5.jpeg",
            "offer": "₹1-5 OFF ABOVE ₹179",
            "title": "The Good Bowl",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            "image": "6.jpeg",
            "offer": "₹100 OFF ABOVE ₹499",
            "title": "NIC Ice Creams",
            "rating": 4.7,
            "minTime": 25,
            "maxTime": 30,
            "name": "Desserts,Ice Cream",
            "place": "Sardarpura"
        },
        {
            "image": "7.jpeg",
            "offer": "Items at ₹109",
            "title": "Dosh Center",
            "rating": 4.0,
            "minTime": 35,
            "maxTime": 40,
            "name": "South Indian",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "8.jpeg",
            "offer": "₹125 OFF ABOVE ₹349",
            "title": "Lunch Box - Meals and Thalis",
            "rating": 4.3,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            "image": "9.jpeg",
            "offer": "₹70 OFF ABOVE ₹249",
            "title": "McDonald's",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "American",
            "place": "Rawaton Ka Bass"
        },
        {
            "image": "10.jpeg",
            "offer": "₹100 OFF ABOVE ₹449",
            "title": "Kajal's Cake",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Cake",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "11.avif",
            "offer": "₹100 OFF ABOVE ₹199",
            "title": "Seoul Fried Chicken",
            "rating": 4,
            "minTime": 60,
            "maxTime": 70,
            "name": "American,Korean,Fast Food",
            "place": "Ratu Road"
        },
        {
            "image": "12.avif",
            "offer": "₹150 OFF ABOVE ₹299",
            "title": "Subway",
            "rating": 4.1,
            "minTime": 25,
            "maxTime": 30,
            "name": "Sandwich,Salads,wrap,Healthy Food",
            "place": "Malabar Enclave"
        },
        {
            "image": "13.avif",
            "offer": "70% OFF UPTO ₹140",
            "title": "Crusto's-Cheese Brust Pizza By Olio",
            "rating": 4.5,
            "minTime": 55,
            "maxTime": 65,
            "name": "Pizzas,Pastas,Italians,Fast Food",
            "place": "Lalpur"
        },
        {
            "image": "14.avif",
            "offer": "70% OFF UPTO ₹140",
            "title": "CakeZone Patisserie",
            "rating": 4.5,
            "minTime": 50,
            "maxTime": 60,
            "name": "Bakery,Desserts,Beverages",
            "place": "Lalpur"
        },
        {
            "image": "15.avif",
            "offer": "ITEMS AT ₹59",
            "title": "Burger King",
            "rating": 4.2,
            "minTime": 55,
            "maxTime": 65,
            "name": "Burgers,American",
            "place": "Lalpur"
        },
        {
            "image": "16.avif",
            "offer": "60% OFF UPTO ₹120",
            "title": "The Best",
            "rating": 3.8,
            "minTime": 55,
            "maxTime": 65,
            "name": "North Indian,Chinese,South Indian",
            "place": "Lalpur"
        },
    ]

    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex items-center justify-between'>
                <div className='text-[25px] font-bold'>
                    Top restaurant chains in Ranchi
                </div>
                <div className='flex'>
                    <div
                        className={`flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${slide == 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                            }`}
                        onClick={slide == 0 ? null : prevSlide}
                    >
                        <FaArrowLeft />
                    </div>

                    <div
                        className={`flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ${slide >= restaurants.length - 4 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                            }`}
                        onClick={slide >= restaurants.length - 4 ? null : nextSlide}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex gap-5 mt-4 overflow-hidden'>
                <div
                    className='flex gap-5 transition-all duration-500'
                    style={{
                        transform: `translateX(-${slide * 293}px)`
                    }}
                >
                    {restaurants.map((restaurant) => (
                        <Card
                            key={restaurant.title}
                            width="w-full md:w-[273px] "
                            image={restaurant.image}
                            offer={restaurant.offer}
                            title={restaurant.title}
                            rating={restaurant.rating}
                            minTime={restaurant.minTime}
                            maxTime={restaurant.maxTime}
                            name={restaurant.name}
                            place={restaurant.place}
                        />
                    ))}
                </div>
            </div>
            <hr className='my-4 border-[1px]'></hr>
        </div>
    )
}