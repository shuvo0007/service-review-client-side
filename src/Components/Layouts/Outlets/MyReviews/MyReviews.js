import React, { useEffect, useState } from "react";

const MyReviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);

  return <div>
    {
      allReviews.map(review=>{
        console.log(review)
      })
    }
  </div>;
};

export default MyReviews;
