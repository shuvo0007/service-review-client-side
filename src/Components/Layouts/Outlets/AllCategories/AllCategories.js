import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import CategoryCards from "../Main/CategoryCards";

const AllCategories = () => {
  useTitle("Category");
  const allCategories = useLoaderData();
  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:pl-72 md:pr-52 md:pt-16 flex flex-col justify-center items-center pt-10">
        {allCategories
          .slice()
          .reverse()
          .map((category) => (
            <CategoryCards
              key={category._id}
              category={category}
            ></CategoryCards>
          ))}
      </div>
    </div>
  );
};

export default AllCategories;
