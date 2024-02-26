import Header from "@/src/components/Header";
import "./globals.css";
import Landing from "@/src/components/Landing";
import Features from "@/src/components/Features";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Landing />
      <Features />
    </>
  );
};

export default Home;
