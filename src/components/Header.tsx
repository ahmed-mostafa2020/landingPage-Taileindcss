"use client";

import Image from "next/image";
import "../../styles/global.scss";
import logo from "../../public/assets/images/logo.svg";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = {};

const Header = (props: Props) => {
  const links: string[] = ["features", "teams", "signs"];

  const headerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const header = headerRef.current;
    if (header) {
      if (window.scrollY > 100) {
        header.style.background = "#0c1524";
        header.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed z-50 w-full top-0 left-0 transition-all duration-300 ease-linear"
    >
      <div className="container element-center flex-col gap-5 mx-auto sm:flex-row sm:justify-between">
        <Link href="./">
          <Image src={logo} alt="logo" />
        </Link>

        <nav>
          <ul className="flex gap-10">
            {links.map((link) => (
              <li key={link}>
                <Link
                  className="text-mainColor opacity-90 hover:opacity-100 hover:underline capitalize transition-all duration-300 ease-in-out"
                  href={`./${link}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
