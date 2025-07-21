import React, { useState } from "react";
import Test_card from "./test_card";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const testimonials = [
  {
    initials: "AS",
    name: "Amanda Smith",
    title: "Marketing Director, StyleHouse",
    text:
      "Our website redesign project was handled with utmost professionalism. The team's expertise in Laravel and frontend technologies resulted in a fast, responsive website that perfectly represents our brand. I highly recommend their services.",
    rating: 5,
  },
  {
    initials: "MJ",
    name: "Michael Johnson",
    title: "Operations Manager, LogisTech",
    text:
      "We needed a custom inventory management system, and Rahul's team delivered a solution that perfectly fits our business needs. The software is intuitive, efficient, and has significantly improved our operational workflow. Great job!",
    rating: 5,
  },
  
];

function Test() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="bg-neutral-800 mt-20 text-white">
      <div className="container py-20 mx-auto overflow-hidden">
        <div className="pt-10 flex justify-center">
          <h1 className="text-4xl text-center font-bold relative inline-block pb-3">
            Testimonials
            <span className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full"></span>
          </h1>
        </div>

       
        <div className="flex justify-center items-center relative mt-12">
          <button
            onClick={handlePrev}
            className="absolute left-4 bg-neutral-700 hover:bg-neutral-600 p-2 rounded-full"
          >
            <ChevronLeft className="text-white" />
          </button>

          <Test_card {...testimonials[currentIndex]} />

          <button
            onClick={handleNext}
            className="absolute right-4 bg-neutral-700 hover:bg-neutral-600 p-2 rounded-full"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-400" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
