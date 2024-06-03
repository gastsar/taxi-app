"use client";
import Image from "next/image";
import { useState } from "react";
import Car01 from "../../public/car-01.png";
import Car02 from "../../public/car-02.png";
import Car03 from "../../public/car-03.png";
import Car04 from "../../public/car-04.png";
const options = [
  {
    name: "Electric",
    image: Car04,
    price: "37.77",
  },
  {
    name: "Minivan",
    image: Car03,
    price: "45.29",
  },
  {
    name: "Economy",
    image: Car02,
    price: "37.77",
  },
  {
    name: "Sedan",
    image: Car01,
    price: "37.77",
  },
];

function CarOptions() {
  const [activeIndex, setActiveIndex] = useState<any>();

  return (
    <section className="my-5">
      <p className="text-md font-semibold text-slate-700/60">Car Options</p>
      <div className="grid grid-cols-3 gap-5 my-5 text-center">
        {options.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-1 border-2 border-slate-200 p-2 rounded-md hover:border-yellow-500 hover:cursor-pointer shadow-md hover:scale-105 transition-all duration-300 ${
              activeIndex == index ? "border-yellow-500" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={item.image} alt={item.name} />
            <p className="text-xs font-semibold text-slate-700/60">
              {item.name}
            </p>
            <p className="text-xs font-semibold ">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarOptions;
