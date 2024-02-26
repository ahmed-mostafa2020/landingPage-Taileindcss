import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  desc: string;
};

const FeatureBox = (props: Props) => {
  return (
    <div className="element-center gap-4 flex-col text-mainColor min-w-[45%] max-w-full text-center">
      <Image
        className="object-contain h-[80px]"
        src={props.icon}
        alt="icon-img"
        width={80}
        height={80}
      />

      <h2 className="font-semibold text-[18px] md:text-[20px]">
        {props.title}
      </h2>
      <p className="text-[14px] w-full md:w-[400px] opacity-90">{props.desc}</p>
    </div>
  );
};

export default FeatureBox;
