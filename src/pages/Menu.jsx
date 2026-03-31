import { useState } from "react";
import NoPage from "../assets/NoPage.png";
import { toast } from "react-toastify";
import { Heart } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "Fattoush salad",
    description:
      "A traditional Middle Eastern salad made with fresh vegetables, crispy toasted pita bread, and a tangy sumac dressing.",
    price: 24.0,
    rating: 4.9,
    image:
      "https://plus.unsplash.com/premium_photo-1692309186600-03bb12fd3adb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Vegetable salad",
    description:
      "A refreshing blend of crisp seasonal vegetables, lightly seasoned and served with a zesty dressing.",
    price: 26.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1722032617357-7b09276b1a8d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Egg vegi salad",
    description:
      "A wholesome mix of fresh garden vegetables and perfectly boiled eggs, tossed with a light and creamy dressing.",
    price: 23.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1710432104535-38c7da06ca6d?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Greek Salad",
    description:
      "Classic Greek salad with juicy tomatoes, cucumbers, red onions, olives, feta cheese, and oregano dressing.",
    price: 28.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1540420773420-336661e90f9d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce, parmesan cheese, croutons, and creamy Caesar dressing with a hint of anchovy.",
    price: 27.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Quinoa Avocado Salad",
    description:
      "Nutritious quinoa, creamy avocado, cherry tomatoes, cucumber, and lemon herb dressing.",
    price: 29.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1515543904379-3d7570d7a9c7?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Caprese Salad",
    description:
      "Fresh mozzarella, ripe tomatoes, basil leaves, drizzled with balsamic glaze and olive oil.",
    price: 25.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9f070d9?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Tabbouleh Salad",
    description:
      "Fresh parsley, bulgur wheat, tomatoes, mint, and a bright lemon-olive oil dressing.",
    price: 22.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1607330281943-4a6d9c3f5d9e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "Chicken Salad",
    description:
      "Grilled chicken strips, mixed greens, corn, cherry tomatoes, and honey mustard dressing.",
    price: 32.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1565299623644-6c5c4e5e8e6e?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Tuna Salad",
    description:
      "Flaky tuna, crisp lettuce, cucumbers, onions, and a light mayo-lemon dressing.",
    price: 30.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Mango Avocado Salad",
    description:
      "Sweet mango, creamy avocado, red onion, cilantro, and tangy lime dressing.",
    price: 26.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a26?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Beetroot Feta Salad",
    description:
      "Roasted beetroot, crumbled feta, walnuts, arugula, and balsamic vinaigrette.",
    price: 27.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 13,
    title: "Cobb Salad",
    description:
      "Classic American salad with bacon, avocado, blue cheese, egg, chicken, and tomatoes.",
    price: 33.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 14,
    title: "Pasta Salad",
    description:
      "Tri-color pasta, bell peppers, olives, cherry tomatoes, and Italian herb dressing.",
    price: 24.0,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 15,
    title: "Watermelon Feta Salad",
    description:
      "Sweet watermelon cubes, salty feta cheese, fresh mint, and lime dressing.",
    price: 23.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1564093497595-593b96d80180?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 16,
    title: "Kale Caesar Salad",
    description:
      "Massaged kale, parmesan, croutons, and creamy Caesar dressing with a healthy twist.",
    price: 25.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 17,
    title: "Sprout Salad",
    description:
      "Fresh bean sprouts, carrots, cabbage, peanuts, and spicy peanut dressing.",
    price: 21.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34b4?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 18,
    title: "Mediterranean Chickpea Salad",
    description:
      "Chickpeas, cucumbers, tomatoes, red onions, parsley, and lemon garlic dressing.",
    price: 24.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1593001870117-858c7a3d1f8b?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 19,
    title: "Thai Mango Salad",
    description:
      "Green mango, carrots, peanuts, chili, and sweet tangy Thai dressing.",
    price: 26.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 20,
    title: "Rainbow Salad",
    description:
      "Colorful mix of red cabbage, carrots, corn, bell peppers, and apple cider vinaigrette.",
    price: 22.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1170&auto=format&fit=crop",
  },
];

const Menu = () => {
  const [click, setClick] = useState(false);
  const [visited, setVisited] = useState(false);

  const handelvisited = () => {
    setVisited(!visited);
    toast.success("Card Add Successfull!");
  };

  return (
    <>
      <div className="mt-40 container mx-auto">
        <div className="grid grid-cols-4 gap-10">
          {cardData.map((crds) => (
            <div key={crds.id}>
              <div className="relative bg-base-100 shadow-2xl rounded-3xl p-10 hover:shadow-2xl transition duration-300 hover:scale-105">
                <div className="flex justify-center">
                  <img
                    src={crds.image}
                    className="w-60 h-60 object-cover rounded-full border-6 border-green-100 shadow-md"
                  />
                </div>

                <div className="mt-6 space-y-2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {crds.title}
                  </h2>
                  <p className="text-gray-500 text-xl line-clamp-2">
                    {crds.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-green-600">
                      ${crds.price}
                    </span>

                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                      ⭐⭐⭐ {crds.rating}
                    </span>
                  </div>
                  <button
                    onClick={handelvisited}
                    className="btn btn-success bg-green-500 text-white mt-5 w-full"
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
