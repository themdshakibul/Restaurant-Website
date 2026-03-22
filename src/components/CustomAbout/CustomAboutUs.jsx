import SheapImage from "../../assets/SheapImage.png";
import feedBack1 from "../../assets/feedBack-1.png";
import feedBack2 from "../../assets/feedBack-2.png";
import feedBack3 from "../../assets/feedBack-3.png";
import OurBest from "../../assets/ourBest.png";

const CustomAboutUs = () => {
  return (
    <>
      <div className="container mx-auto p-3 mb-40">
        <div className="grid lg:grid-cols-2 mb-20">
          <div className="relative">
            <img src={SheapImage} alt="Shape Image" className="z-20 relative" />
            <div>
              <img
                src={OurBest}
                alt=""
                className="absolute sm:-ml-6 bottom-0"
              />
            </div>
          </div>
          <div>
            <header className="space-y-10 mt-10 md:mt-30">
              <p className="text-xl font-bold uppercase text-red-500">
                Testimonials
              </p>
              <h2 className="text-5xl md:text-6xl font-bold">
                What Our Customers Say About Us
              </h2>
              <p className="text-2xl font-medium">
                “I had the pleasure of dining at Foodi last night, and I'm still
                raving about the experience! The attention to detail in
                presentation and service was impeccable”
              </p>
              <div>
                <div className="flex flex-wrap justify-between absolute items-center">
                  <img src={feedBack1} alt="" className="h-21" />
                  <img src={feedBack2} alt="" className="-ml-8 relative" />
                  <img src={feedBack3} alt="" className="z-10 -ml-8 relative" />
                  <div className="ml-20 mt-10 sm:mt-0">
                    <h2 className="text-2xl font-semibold">
                      Customer Feedback
                    </h2>
                    <div className="flex gap-3">
                      <h3>⭐⭐ 4.9</h3>
                      <p>(18.6k Reviews)</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomAboutUs;
