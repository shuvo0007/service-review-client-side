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
        <h2 className="text-5xl mb-10">{card.name}</h2>
        <p className="text-2xl w-11/12 text-justify">{card.details}</p>
      </div>
    </div>
  );
};

export default CardDetails;
