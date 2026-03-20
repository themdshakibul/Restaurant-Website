import { ChevronLeft, ChevronRight } from "lucide-react";
import { use } from "react";
import StanderDishCard from "./StanderDishCard";

const FormOurMenu = ({ StanOutDish }) => {
  const FormMenuRes = use(StanOutDish);
  const FormMenuData = FormMenuRes.data;

  return (
    <>
      <div className="container mx-auto p-3 mb-20 md:mb-40">
        <header className="space-y-4 py-10">
          <p className="text-xl font-bold uppercase text-red-500">
            Special Dishes
          </p>
          <div className="md:flex items-center justify-between">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Standout Dishes
              <br />
              From Our Menu
            </h2>
            <div className="flex gap-4 align-bottom">
              <span className="bg-gray-300 p-1 rounded-full cursor-pointer">
                <ChevronLeft size={30} />
              </span>
              <span className="bg-green-500 p-1 rounded-full text-white cursor-pointer">
                <ChevronRight size={30} />
              </span>
            </div>
          </div>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FormMenuData.map((MenuData) => (
            <StanderDishCard key={MenuData.id} itemData={MenuData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FormOurMenu;
