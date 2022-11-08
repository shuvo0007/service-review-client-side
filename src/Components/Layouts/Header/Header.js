import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to={"/"}>
            <button className="flex">
              <img className="w-20 p-2 m-2" src={logo} alt="img" />
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
                TutorBD
              </span>
            </button>
          </Link>
          <div className="flex items-center">
            <Link to={"/login"}>
              <Button className="border-2 border-blue-400 p-2 rounded-lg mx-2 text-base  font-medium dark:text-blue-500 hover:bg-red-500 text-white">
                Login
              </Button>
            </Link>
            <Link to={"/registration"}>
              <Button className="border-2 border-blue-400 p-2 rounded-lg mx-2 text-base  font-medium dark:text-blue-500 hover:bg-red-500 text-white">
                Registration
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-transparent dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-xl font-medium">
              <li>
                <Link to={"/"}>
                  <button
                    className="text-white dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/allCategories"}>
                  <button className="text-white dark:text-white hover:underline">
                    All Categories
                  </button>
                </Link>
              </li>
              <li>
                <button className="text-white dark:text-white hover:underline">
                  Team
                </button>
              </li>
              <li>
                <button className="text-white dark:text-white hover:underline">
                  Features
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
