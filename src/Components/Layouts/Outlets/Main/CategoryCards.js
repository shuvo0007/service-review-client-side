import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const CategoryCards = ({ category }) => {
  return (
    <div className=" w-96 flex flex-col overflow-hidden border-2 border-sky-500 rounded-lg mb-10 bg-white transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100">
      <img className="h-96" src={category.image} alt="" />
      <p className="text-2xl text-justify p-5 text-black">
        {category.details.slice(0, 100) + "..."}
      </p>
      <p className="p-5 text-2xl border-2 text-gray-900 bg-gradient-to-r from-lime-300 via-lime-600 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg px-5 py-2.5 text-center ">Price: <span className="text-red-600">{category.price} </span>tk / month</p>
      <div>
        <Link to={`/category/${category._id}`}>
          <button className="text-2xl py-10 rounded bg-blue-800 text-white text-center flex justify-center items-center w-full">
            {category.name}
            <span className="pl-5 pt-1">
              <SlArrowRight size={20} />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCards;
