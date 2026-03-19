import { Play } from "lucide-react";
import homeImag from "../../assets/home-imge.png";
import homeBgCircle from "../../assets/Rectangle.png";

const Header = () => {
  return (
    <>
      <div className="container mx-auto px-3 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center py-30">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-14 md:leading-18">
            Dive into Delights Of Delectable
            <span className="text-green-500"> Food</span>
          </h2>

          <p className="text-xl md:text-2xl font-medium">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>

          <div className="flex flex-wrap gap-5  items-center">
            <button className="btn bg-green-500 text-xl md:text-2xl font-semibold text-white rounded-full shadow-2xl md:py-7 md:px-10 shadow-green-400">
              Order Now
            </button>

            <button className="btn flex items-center gap-3 text-xl md:text-2xl font-semibold rounded-full shadow-xl md:px-10 md:py-7">
              Watch Video
              <span className="bg-gray-200 shadow-2xl md:p-2 rounded-full flex items-center justify-center">
                <Play size={30} className="text-black" />
              </span>
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-end justify-center w-full">
          <img
            src={homeBgCircle}
            alt=""
            className="w-70 md:w-90 lg:w-105 object-contain"
          />

          <img
            src={homeImag}
            alt=""
            className="absolute z-10 mr-6.5 md:mr-9 w-75 md:w-100 lg:w-113"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
