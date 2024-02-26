"use client";

import { useState } from "react";
import FeatureBox from "./FeatureBox";
import icon1 from "../../public/assets/images/icon-access-anywhere.svg";
import icon2 from "../../public/assets/images/icon-security.svg";
import icon3 from "../../public/assets/images/icon-collaboration.svg";
import icon4 from "../../public/assets/images/icon-any-file.svg";

const Features = () => {
  const [items, setItems] = useState([
    {
      icon: icon1,
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: icon2,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: icon3,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: icon4,
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  return (
    <section className="space">
      <div className="container element-center gap-y-10 flex-wrap">
        {items.map((item) => (
          <FeatureBox
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
