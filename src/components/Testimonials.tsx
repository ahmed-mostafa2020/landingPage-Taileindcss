"use client";

import { useState } from "react";
import TestimonialBox from "./TestimonialBox";
import Image from "next/image";
import quotes from "../../public/assets/images/bg-quotes.png";
import person1 from "../../public/assets/images/profile-1.jpg";
import person2 from "../../public/assets/images/profile-2.jpg";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: person1,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: person2,
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: person1,
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="space">
      <div className="container relative grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Image
          className="absolute top-[-35px] left-[10px]  -z-[1] "
          src={quotes}
          alt="quote"
        />

        {testData.map((item) => (
          <TestimonialBox
            key={item.id}
            desc={item.desc}
            image={item.image}
            position={item.position}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
