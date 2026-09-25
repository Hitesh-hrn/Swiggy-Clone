import React from "react";
import Card from "./Card.jsx";
import { useEffect, useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SortBy from "./SortBy.jsx";
import Filter from "./Filter.jsx"

export default function OnlineDelivery() {

    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current) {
                const rect = componentRef.current.getBoundingClientRect();

                setIsAtTop(rect.top <= 0);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const restaurants = [
        {
            image: "1.jpeg",
            offer: "Items at ₹179",
            title: "Pizza Hut",
            rating: 4.2,
            minTime: 30,
            maxTime: 40,
            name: "Pizzas",
            place: "New Jodhpur"
        },
        {
            image: "2.jpeg",
            offer: "₹50 OFF ABOVE ₹199",
            title: "Janta Sweet Home",
            rating: 4.5,
            minTime: 35,
            maxTime: 40,
            name: "Sweets,South Indian",
            place: "Shastri Nagar"
        },
        {
            image: "3.jpeg",
            offer: "₹85 OFF ABOVE ₹149",
            title: "Parihaar Bhojnalay",
            rating: 4.3,
            minTime: 35,
            maxTime: 40,
            name: "North India, Thalis",
            place: "Sardarpura"
        },
        {
            image: "4.jpeg",
            offer: "₹70 OFF ABOVE ₹149",
            title: "Kwality Walls Frozen",
            rating: 4.5,
            minTime: 25,
            maxTime: 25,
            name: "Desserts,Ice Cream",
            place: "Chopsani Housing Board"
        },
        {
            image: "5.jpeg",
            offer: "₹1-5 OFF ABOVE ₹179",
            title: "The Good Bowl",
            rating: 4.4,
            minTime: 30,
            maxTime: 35,
            name: "Biryani, North India",
            place: "Shastri Nagar"
        },
        {
            image: "6.jpeg",
            offer: "₹100 OFF ABOVE ₹499",
            title: "NIC Ice Creams",
            rating: 4.7,
            minTime: 25,
            maxTime: 30,
            name: "Desserts,Ice Cream",
            place: "Sardarpura"
        },
        {
            image: "7.jpeg",
            offer: "Items at ₹109",
            title: "Dosh Center",
            rating: 4.0,
            minTime: 35,
            maxTime: 40,
            name: "South Indian",
            place: "Chopsani Housing Board"
        },
        {
            image: "8.jpeg",
            offer: "₹125 OFF ABOVE ₹349",
            title: "Lunch Box - Meals and Thalis",
            rating: 4.3,
            minTime: 30,
            maxTime: 35,
            name: "Biryani, North India",
            place: "Shastri Nagar"
        },
        {
            image: "9.jpeg",
            offer: "₹70 OFF ABOVE ₹249",
            title: "McDonald's",
            rating: 4.4,
            minTime: 30,
            maxTime: 35,
            name: "American",
            place: "Rawaton Ka Bass"
        },
        {
            image: "10.jpeg",
            offer: "₹100 OFF ABOVE ₹449",
            title: "Kajal's Cake",
            rating: 4.5,
            minTime: 35,
            maxTime: 40,
            name: "Cake",
            place: "Chopsani Housing Board"
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
    ];

    return (
        <div className="w-full">

            {/* Heading */}
            <div
                ref={componentRef}
                className="max-w-[1200px] mx-auto px-2"
            >
                <div className="flex items-center justify-between my-5">
                    <div className="text-[25px] font-bold">
                        Restaurants with online food delivery in jodhpur
                    </div>
                </div>
            </div>
            <div
                className={
                    isAtTop
                        ? "fixed top-0 left-0 z-[998] w-full bg-white border-b border-[#eee] shadow-sm"
                        : "w-full bg-white "
                }
            >
                <div className="max-w-[1200px] mx-auto px-2 py-4 ">
                    <div className="flex items-center justify-between gap-3">
                       <SortBy/>
                       <Filter isAtTop={isAtTop} />

                        {/* Search */}
                        <div
                            className={`flex items-center gap-1 rounded-full border border-[#ddd] bg-white px-3 py-2 shadow-sm ${isAtTop ? "visible" : "invisible"
                                }`}
                        >

                            <input
                                type="text"
                                placeholder="Search for restaurants and food"
                                className="w-[220px] outline-none text-[15px]"
                            />
                            <AiOutlineSearch className="text-[24px] text-[#333]" />
                        </div>

                    </div>
                </div>
            </div>
            {/* Restaurant Cards */}
            <div className="max-w-[1200px] mx-auto px-2">
                <div className="grid grid-cols-2 gap-7 md:grid-cols-4">

                    {restaurants.map((restaurant) => (
                        <Card
                            key={restaurant.title}
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

        </div>
    );
}