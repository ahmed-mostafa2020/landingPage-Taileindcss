import Image from "next/image";
import image from "../../public/assets/images/illustration-stay-productive.png";
import ArrowImg from "../../public/assets/images/icon-arrow.svg";
import Link from "next/link";

type Props = {};

const StayProductive = (props: Props) => {
  return (
    <section className="py-[100px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <figure>
          <Image src={image} alt="stay-productive-img" />
        </figure>

        <div className="text-mainColor flex flex-col gap-5 ">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay productive,
            <br />
            wherever you are
          </h3>

          <p className="tracking-wide text-sm opacity-90">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>

          <p className="tracking-wide text-sm opacity-90">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            excepturi incidunt quo deserunt quidem accusamus iure ab earum
            reprehenderit debitis!
          </p>

          <Link
            className="text-secColor pb-2 w-fit flex gap-3 border-b-2 border-secColor hover:text-hoverColor hover:border-hoverColor transition-all duration-300"
            href="/"
          >
            See how Fylo works
            <Image
              className="object-contain animate-[moveRight_1s_ease-in-out_infinite]"
              src={ArrowImg}
              alt="arrow-img"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
