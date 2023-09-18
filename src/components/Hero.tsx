import { BsArrowRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="container pt-8 ">
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-8">
        <div className="rlative lg:col-span-2 lg:row-start-1 lg:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__1.webp"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[31%] sm:top-[40%] md:top-[40%] lg:top-[50%] -translate-y-[50%] sm:space-y-2 ">
            <p className="text-2xl hidden sm:block">100% original Dry Fruits</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold">
              Dried Fruits Best Quality
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
              $18.36
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__2.webp"
            alt="HERO 2"
          />

          <div className="absolute max-w-[470px] sm:ml-16 lg:ml-9 xl:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 lg:space-y-0 xl:space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl   font-bold">
              Best Yummy Pizza
            </h2>
            <p className="text-gray-500 text-xl pt-4 ">Starting At</p>
            <div className="font-medium text-red-600 text-2xl md:text-3xl lg:text-2xl xl:text-3xl pb-8">
              $25
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/hero__3.webp"
            alt="HERO 3"
          />
          <div className="absolute max-w-[470px] sm:ml-16 lg:ml-9 xl:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2 lg:space-y-0 xl:space-y-2">
            <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl   font-bold">
              Best Crispy Chips
            </h2>
            <p className="text-gray-500 text-xl pt-4 ">Starting At</p>
            <div className="font-medium text-red-600 text-2xl md:text-3xl lg:text-2xl xl:text-3xl pb-8">
              $5
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <BsArrowRight />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
