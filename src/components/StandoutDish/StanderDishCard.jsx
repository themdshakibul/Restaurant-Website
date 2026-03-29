import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

const StanderDishCard = ({ itemData }) => {
  const { image, title, description, price, rating } = itemData;

  const [click, setClick] = useState(false);
  const [visited, setVisited] = useState(false);

  const handelvisited = () => {
    // setVisited(visited ? false : true);
    setVisited(!visited);
    toast.success("Card Add Successfull!");
  };

  return (
    <>
      <div className="relative bg-base-100 shadow-2xl rounded-3xl p-10 hover:shadow-2xl transition duration-300 hover:scale-105">
        <div className="flex justify-center">
          <img
            src={image}
            className="w-60 h-60 object-cover rounded-full border-6 border-green-100 shadow-md"
          />
        </div>

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-xl">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-green-600">${price}</span>

            <span className="flex items-center gap-1 text-yellow-500 font-semibold">
              ⭐⭐⭐ {rating}
            </span>
          </div>
          <button
            onClick={handelvisited}
            className="btn btn-success bg-green-500 text-white mt-5"
          >
            {visited ? "Card Added" : "Add to Card"}
          </button>

          <div className="absolute top-0 right-0">
            <h2
              onClick={() => setClick(!click)}
              className="bg-green-500 w-20 h-15 rounded-bl-4xl rounded-tr-3xl flex items-center justify-center"
            >
              {click ? (
                <h2 className="text-2xl">❤️</h2>
              ) : (
                <Heart className="text-white" size={25} />
              )}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default StanderDishCard;
