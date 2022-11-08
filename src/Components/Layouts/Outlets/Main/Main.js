import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCards from "./CategoryCards";

const Main = () => {
  const allCategories = useLoaderData();
  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:pl-72 md:pr-52 md:pt-16 flex flex-col justify-center items-center pt-10">
        {allCategories
          .slice(-3)
          .reverse()
          .map((category) => (
            <CategoryCards
              key={category.id}
              category={category}
            ></CategoryCards>
          ))}
      </div>
      <button className="text-white text-xl border-2 border-red-600 p-5 rounded-xl ">
        See All
      </button>
    </div>
  );
};

export default Main;
