import Header from "@/src/components/Header";
import "./globals.css";
import Landing from "@/src/components/Landing";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <Landing />
    </>
  );
};

export default Home;
