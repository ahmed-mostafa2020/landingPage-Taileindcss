import Image from "next/image";
import landing from "../../public/assets/images/landing-img.png";
import Link from "next/link";

type Props = {};

const Landing = (props: Props) => {
  return (
    <section className="bg-[#1c2230] pt-[160px] pb-[50px]">
      <div className="container element-center flex-col gap-8 text-center text-mainColor">
        <figure className="w-[600px] max-w-full ">
          <Image className="w-full h-fit" src={landing} alt="landing-img" />
        </figure>

        <h1 className="font-semibold text-[30px] md:text-[40px]">
          All your files in one secure location,
          <br />
          accessible anywhere.
        </h1>

        <p className="w-[600px] max-w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam nulla
          impedit commodi.
        </p>

        <Link
          className="btn w-[260px] h-[60px] font-semibold rounded-[30px] transition-all duration-300"
          href="./register"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Landing;
