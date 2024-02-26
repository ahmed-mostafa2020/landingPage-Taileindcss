import Image, { StaticImageData } from "next/image";

type Props = {
  desc: string;
  image: StaticImageData;
  position: string;
  name: string;
};

const TestimonialBox = (props: Props) => {
  return (
    <div className="p-5 text-mainColor bg-[#21293c] rounded-md flex flex-col gap-7 shadow-[0px_3px_10px_5px_#9e9e9e29] hover:shadow-[0px_3px_20px_5px_#9e9e9e29] transition-all duration-300 ease-in-out">
      <p className="tracking-wide text-md leading-5">{props.desc}</p>

      <div className="flex gap-3 items-center">
        <Image
          className="rounded-full"
          src={props.image}
          alt="profile-img"
          width={50}
          height={50}
        />

        <div>
          <strong className="font-semibold text-[17px]">{props.name}</strong>
          <h5 className="text-[14px] tracking-wider font-thin">
            {props.position}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
