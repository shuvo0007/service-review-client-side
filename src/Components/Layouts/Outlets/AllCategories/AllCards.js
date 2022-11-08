import React from "react";
import { Link } from "react-router-dom";

const AllCards = ({ category }) => {
  return (
    <div className=" w-96 flex flex-col overflow-hidden border-2 border-sky-500 rounded-lg mb-10 bg-white">
      <img className="h-64" src={category.image} alt="" />
      <p className="text-2xl text-justify p-5 text-black">
        {category.details.slice(0, 100) + "..."}
      </p>
      <Link to={`/category/${category.id}`}>
        <button className="bg-blue-700 w-fit px-10 py-5 m-5 rounded-xl text-white text-xl hover:text-black hover:border-2 hover:border-blue-700 hover:bg-white">
          Read More
        </button>
      </Link>
      <div>
        <p className="text-2xl py-10 rounded bg-blue-800 text-white text-center">
          {category.name}
        </p>
      </div>
    </div>
  );
};

export default AllCards;
