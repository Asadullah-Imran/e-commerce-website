import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import CartCountBadge from "./CartCountBadge";
const NavBar = () => {
  return (
    <div className="container lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="text-2xl font-medium sm:text-4xl">Logo</h1>
        <div className="relative w-full max-w-[500px] px-2">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-4 py-2 sm:px-6 sm:py-3 rounded-[30px] w-full"
            type="text"
            placeholder="Search Product"
          />
          <BsSearch
            className="absolute top-0 right-0 mt-2 mr-3 sm:mt-4 sm:mr-5 text-gray-500 "
            size={20}
          />
        </div>
        <div className="flex gap-4">
          <div className="icon__wrapper">
            <AiOutlineUser />
          </div>
          <div className="icon__wrapper relative">
            <AiOutlineShoppingCart />
            <CartCountBadge size="w-[18px] h-[18px] sm:w-[25px] sm:h-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
