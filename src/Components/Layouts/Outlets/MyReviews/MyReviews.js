import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../../Hooks/useTitle";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";

const MyReviews = () => {
  useTitle("MyReviews");

  const { user } = useContext(AuthContext);

  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return (
    <div className="pt-24 px-32 text-white">
      <p className="text-5xl mb-10">My Reviews</p>
      {allReviews.slice().reverse().map((reviews) => (
        <ReviewCard
          key={reviews._id}
          user={user}
          reviews={reviews}
        ></ReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
