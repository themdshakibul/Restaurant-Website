import navLogo from "../../assets/nav-logo.png";
import { Clock, Menu, PhoneCall, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-base-300 shadow-2xl card-border">
        <div className="flex items-center justify-between py-4 container mx-auto px-3">
          <div className="flex items-center gap-2">
            <h2 className="bg-green-500 py-2 px-3 w-fit text-white rounded-md text-xl font-bold ">
              F
            </h2>
            <img src={navLogo} alt="Nav" />
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
            </ul>
          </div>
          <div onClick={() => setOpen(!open)} className="lg:hidden relative">
            {open ? <X /> : <Menu />}

            <ul
              className={`absolute right-0 top-12 flex flex-col items-center gap-3 p-5 w-40 bg-white shadow-2xl rounded-xl z-40 transform transition-all duration-300 ease-in-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Offers</a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-5">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <ShoppingBag color="green" />
                </svg>
                <span className="badge badge-sm indicator-item text-green-500">
                  8
                </span>
              </div>
            </div>
            <Clock width={36} />
            <button className="btn bg-green-500 rounded-full text-white">
              <PhoneCall width={16} />
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
