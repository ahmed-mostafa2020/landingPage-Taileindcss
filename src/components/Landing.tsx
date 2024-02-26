import Image from "next/image";
import landing from "../../public/assets/images/landing-img.png";
import curvey from "../../public/assets/images/bg-curvy-desktop.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="bg-[#1c2230] pt-[160px]">
      <div className="container element-center flex-col gap-8 text-center text-mainColor">
        <figure className="w-[600px] max-w-full ">
          <Image className="w-full h-fit" src={landing} alt="landing-img" />
        </figure>

        <h1 className="font-semibold text-[25px] md:text-[40px]">
          All your files in one secure location,
          <br />
          accessible anywhere.
        </h1>

        <p className="w-[600px]  text-[14px] max-w-full md-[18px]">
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

      <figure className="w-full h-[100px] md:h-[200px]">
        <Image className="w-full h-full" src={curvey} alt="curvey" />
      </figure>
    </section>
  );
};

export default Landing;
