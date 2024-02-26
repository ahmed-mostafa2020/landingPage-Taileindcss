"use client";

import Image from "next/image";
import logo from "../../public/assets/images/logo.svg";
import phone from "../../public/assets/images/icon-phone.svg";
import location from "../../public/assets/images/icon-location.svg";
import email from "../../public/assets/images/icon-email.svg";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [contact, setContact] = useState([
    { icon: phone, text: "+20121212121" },
    { icon: email, text: "example@fylo.com" },
  ]);

  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  return (
    <footer className="space pt-[200px] bg-[#0c1524] text-mainColor">
      <div className="container">
        <Link className="block mb-8" href="./">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="flex gap-4 items-start">
            <Image src={location} alt="location-img" />

            <p className="text-sm tracking-wider break-words">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>

          <div>
            {contact.map((item) => (
              <div className="flex gap-4 mb-4" key={item.text}>
                <Image
                  className="object-contain"
                  src={item.icon}
                  alt="phone-img"
                />
                <p> {item.text} </p>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
            {links.map((item) => (
              <li key={item}>
                <Link
                  href={item.toLowerCase()}
                  className=" hover:text-hoverColor transition-all duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
