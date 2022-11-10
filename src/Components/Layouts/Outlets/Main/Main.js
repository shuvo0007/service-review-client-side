import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import CategoryCards from "./CategoryCards";
import myImage from "../../../img/myPic.jpg";
import { BsBoxArrowRight } from "react-icons/bs";

const Main = () => {
  const allCategories = useLoaderData();
  useTitle("Home");
  return (
    <div className="">
      <div className="md:grid md:grid-cols-3 md:gap-4 md:pl-72 md:pr-52 md:pt-16 flex flex-col justify-center items-center pt-10">
        {allCategories
          .slice(-3)
          .reverse()
          .map((category) => (
            <CategoryCards
              key={category._id}
              category={category}
            ></CategoryCards>
          ))}
      </div>
      <Link to={"/allCategories"}>
        <div className="flex justify-center m-5">
          <button className="text-white text-xl border-2 border-blue-600 p-5 rounded-xl flex ">
            See All
            <span className="pl-5 pt-1">
              <SlArrowRight size={20} />
            </span>
          </button>
        </div>
      </Link>
      <div className="grid grid-cols-12 items-center text-white text-4xl border-2 rounded-xl p-16 m-20 shadow-lg shadow-gray-300/70">
        <div className="col-span-9  px-16 text-justify">
          <p>
            Private tutors provide one-on-one educational assistance to
            elementary and secondary school students or to adults. As an
            elementary school tutor, you may help children (grades 1 – 8)
            improve their skills in reading, writing or math. As a secondary
            school tutor, you may help students (grades 9 – 12) with English,
            history, science, math, French or other subjects. Tutors for adults
            may teach literacy, English or other languages, or other subjects.
            Generally, you are self-employed and operate a tutoring business.
            You may also work for a company that specializes in tutoring
            services or a community literacy organization. You may work out of
            your own home, your students' home, or a local meeting place like a
            library or community centre.
          </p>
        </div>
        <div className="col-span-3 ">
          <img className="border-2 rounded-full" src={myImage} alt="" />
        </div>
      </div>
      <div className="text-white text-4xl border-2 rounded-xl p-16 m-20 shadow-lg shadow-gray-300/70">
        <h2 className="text-5xl m-10">Any Questions?</h2>
        <div className="p-2 flex justify-center">
          <input className="w-1/3 rounded-xl text-black text-2xl p-5" type="text" />
          <BsBoxArrowRight size={80}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
