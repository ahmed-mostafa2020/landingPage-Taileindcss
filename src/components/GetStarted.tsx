const GetStarted = () => {
  return (
    <section className="mb-[-110px] relative z-10">
      <div className="container">
        <div className="mx-auto rounded-md py-[30px] px-[40px] md:px-[60px] element-center gap-5 text-center flex-col text-mainColor bg-[#1d2132] w-[860px] max-w-full">
          <h4 className="font-semibold text-[25px] md:text-[30px]">
            Get early access today
          </h4>
          <p className="text-sm opacity-90 tracking-wider w-[85%] max-w-full">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
            tempore? Vero adipisci eveniet voluptatibus cupiditate!
          </p>
          <form
            className="mt-3 flex flex-wrap md:flex-nowrap justify-between gap-5"
            action=""
          >
            <input
              className="text-black w-full md:w-[450px] py-[10px] px-[20px] rounded-[50px] outline-none focus:shadow-[0px_3px_10px_5px_#9e9e9e29] transition-all duration-300"
              type="email"
              placeholder="email@example.com"
            />
            <button
              className="bg-secColor font-semibold btn  hover:bg-hoverColor  w-full md:w-[200px] h-[50px] capitalize transition-all duration-300"
              type="submit"
            >
              Get started for free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
