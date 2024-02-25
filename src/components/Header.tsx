import Image from "next/image";
import "../../styles/global.scss";
import logo from "../../public/assets/images/logo.svg";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const links: string[] = ["features", "teams", "signs"];
  return (
    <header>
      <div className="container pt-[60px] flex justify-center items-center flex-col gap-5 mx-auto sm:flex-row sm:justify-between ">
        <Link href="./">
          <Image src={logo} alt="logo" />
        </Link>

        <ul className="flex gap-10">
          {links.map((link) => (
            <li key={link}>
              <Link
                className="text-white opacity-90 hover:opacity-100 hover:underline capitalize transition-all duration-300 ease-in-out"
                href={`./${link}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
