import { use } from "react";
import PopularCard from "./PopularCard";

const Popular = ({ popularCard }) => {
  const popularRes = use(popularCard);
  const cardData = popularRes.data;

  return (
    <>
      <div className="container mx-auto p-3 mb-30">
        <header className="space-y-4 text-center py-10">
          <p className="text-xl font-bold uppercase text-red-500">
            Customer Favorites
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">Popular Categories</h2>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {cardData.map((item, index) => (
            <PopularCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
