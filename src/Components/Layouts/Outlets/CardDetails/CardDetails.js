import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";

const CardDetails = () => {
  const card = useLoaderData();
  useTitle("Details");
  return (
    <div className="flex m-10 p-5 border-2 rounded-lg ">
      <img src={card.image} alt="" className="h-96" />
      <div className="text-left text-white m-5">
        <h2 className="text-5xl mb-6">{card.name}</h2>
        <p className="text-2xl w-11/12 text-justify">{card.details}</p>
        <p className="p-5 text-2xl border-2 text-gray-900 bg-gradient-to-r from-lime-300 via-lime-600 to-lime-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg px-5 py-2.5 text-center mt-5">Price: {card.price} tk/month</p>
        <button></button>
      </div>
    </div>
  );
};

export default CardDetails;
