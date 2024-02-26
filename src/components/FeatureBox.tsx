import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  desc: string;
};

const FeatureBox = (props: Props) => {
  return (
    <div className="element-center gap-4 flex-col text-mainColor min-w-[40%] max-w-full text-center">
      <Image src={props.icon} alt="icon-img" width={70} height={70} />

      <h2 className="text-[18px] md:text-[20px]">{props.title}</h2>
      <p className="text-[14px] w-full md:w-[400px] opacity-90">{props.desc}</p>
    </div>
  );
};

export default FeatureBox;
