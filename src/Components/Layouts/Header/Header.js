import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaRegUser } from "react-icons/fa";
import logo from "../../img/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
          <nav className="bg-transparent dark:bg-gray-700">
            <div className="pb-3 px-4 mx-auto max-w-screen-xl md:px-6">
              <div className="flex items-center ">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-xl font-medium">
                  <li>
                    <Link to={"/"}>
                      <button
                        className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg hover:rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-6 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100"
                        aria-current="page"
                      >
                        Home
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/allCategories"}>
                      <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg hover:rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-6 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100">
                        All Categories
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/blogs"}>
                      <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg hover:rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-6 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100">
                        Blogs
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center">
                <ul className="flex ">
                  <li>
                    <Link to={"/reviews"}>
                      <button className="text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg hover:rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-3 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100">
                        My reviews
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/addCategory"}>
                      <button className="text-white bg-orange-600 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg hover:rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 m-3 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100">
                        Add Category
                      </button>
                    </Link>
                  </li>
                </ul>
                {user.photoURL ? (
                  <img
                    className="rounded-full w-16"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <div className="border-2 rounded-full p-3 text-white">
                    <FaRegUser size={30}></FaRegUser>
                  </div>
                )}
                <p className="m-5 text-xl text-white">{user?.displayName}</p>
                <button
                  onClick={handleLogOut}
                  type="button"
                  className="mx-5 text-lg text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
