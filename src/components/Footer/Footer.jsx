import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import navLogo from "../../assets/nav-logo.png";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <footer className="footer grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-base-content py-20">
          <aside>
            <div className="flex items-center gap-2">
              <h2 className="bg-green-500 py-2 px-3 w-fit text-white rounded-md text-xl font-bold ">
                F
              </h2>
              <img src={navLogo} alt="Nav" />
            </div>
            <p className="text-2xl font-medium text-gray-500">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </aside>
          <nav>
            <h6 className="text-2xl font-semibold text-black">Useful links</h6>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              About us
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Events
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Blogs
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              FAQ
            </a>
          </nav>
          <nav>
            <h6 className="text-2xl font-semibold text-black">Main Menu</h6>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Offers
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Menus
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Reservation
            </a>
          </nav>
          <nav>
            <h6 className="text-2xl font-semibold text-black">Contact Us</h6>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              example@email.com
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              +64 958 248 966
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-500 hover:text-black"
            >
              Social media
            </a>
          </nav>
        </footer>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 items-center">
          <div className="flex gap-5 items-center">
            <a href="#">
              <Facebook
                size={50}
                color="black"
                className="bg-green-500 rounded-full p-2 shadow-2xl"
              />
            </a>
            <a href="#">
              <Instagram
                size={50}
                color="black"
                className="bg-green-50 rounded-full shadow-2xl p-2 hover:bg-green-500"
              />
            </a>
            <a href="#">
              <Twitter
                size={50}
                color="black"
                className="bg-green-50 rounded-full shadow-2xl p-2 hover:bg-green-500"
              />
            </a>
            <a href="#">
              <Youtube
                size={50}
                color="black"
                className="bg-green-50 rounded-full shadow-2xl p-2 hover:bg-green-500"
              />
            </a>
          </div>
          <p className="text-xl font-semibold">
            Copyright 2026 Dscode | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
