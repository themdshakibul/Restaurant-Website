import { HandPlatter } from "lucide-react";
import ServicesCard from "./ServicesCard";
import card1 from "../../assets/icon1.png";
import card2 from "../../assets/icon2.png";
import card3 from "../../assets/icon3.png";

const ServicesCards = [
  {
    id: 1,
    title: "CATERING",
    description: "Delight your guests with our flavors and presentation",
    icon: card1,
  },
  {
    id: 2,
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
    icon: card2,
  },
  {
    id: 3,
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering",
    icon: "online",
  },
  {
    id: 4,
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
    icon: card3,
  },
];

const Services = () => {
  return (
    <>
      <div
        className="container mx-auto p-3 grid lg:grid-cols-2 gap-10 items-center mb-30
      "
      >
        <div className="space-y-10  py-10">
          <p className="text-xl font-bold uppercase text-red-500">
            Our Story & Services
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">
            Our Culinary Journey And Services
          </h2>
          <p>
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <button className="btn btn-success bg-green-500 text-xl md:text-2xl font-semibold text-white rounded-full shadow-2xl py-8 px-8 shadow-green-400">
            Explore
          </button>
        </div>

        <div>
          <div className="grid sm:grid-cols-2 gap-10">
            {ServicesCards.map((Servic) => (
              <ServicesCard ServicesCard={Servic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
