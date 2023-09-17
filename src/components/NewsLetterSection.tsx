import { LuMailOpen } from "react-icons/lu";
const NewsLetterSection = () => {
  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold">
              Sign up To our NewsLetters
            </h3>
            <p>... and receive $20 coupon for first shipping</p>
          </div>
        </div>
        <div className="w-full max-w-[500px] relative">
          <input
            className="py-4 px-6 w-full rounded-full"
            type="text"
            placeholder="Your email address"
          />
          <button className="bg-accentDark absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-accent">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
