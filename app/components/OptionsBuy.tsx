"use client";
import Image from "next/image";
import { useState } from "react";
import applePay from "../../public/apple-pay.png";
import googlePay from "../../public/google-pay.png";
import visa from "../../public/visa.png";

const options = [
  { name: "applePay", image: applePay },
  { name: "googlePay", image: googlePay },
  { name: "visa", image: visa },
];
function OptionsBuy() {
  const [activeIndex, setActiveIndex] = useState<any>();
  return (
    <section>
      <p className="text-md font-semibold text-slate-700/60">Payment Options</p>
      <div className="flex gap-5 my-5">
        {options.map((item, index) => (
          <div
            key={index}
            className={`border-2 border-slate-200 p-2 rounded-md hover:border-yellow-500 hover:cursor-pointer shadow-md hover:scale-105 transition-all duration-300 ${
              activeIndex == index ? "border-yellow-500" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={item.image} alt={item.name} width={30} height={30} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OptionsBuy;
