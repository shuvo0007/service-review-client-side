import React from "react";
import { Link } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";

const CategoryCards = ({ category }) => {
  return (
    <div className=" w-96 flex flex-col overflow-hidden border-2 border-sky-500 rounded-lg mb-10 bg-white transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-110  duration-100">
      <img className="h-64" src={category.image} alt="" />
      <p className="text-2xl text-justify p-5 text-black">
        {category.details.slice(0, 100) + "..."}
      </p>
      <div>
        <Link to={`/category/${category.card_id}`}>
          <button className="text-2xl py-10 rounded bg-blue-800 text-white text-center flex justify-center w-full">
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
