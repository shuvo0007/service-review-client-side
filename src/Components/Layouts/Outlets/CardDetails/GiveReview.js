import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const GiveReview = ({ card_id }) => {
  const { user } = useContext(AuthContext);

  const [review, setReviews] = useState({});
  const handleReviews = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User added successfully");
        event.target.reset();
      });
  };

  const handleInputBlur = (event) => {
    const userId = user.uid;
    const userName = user.displayName;
    const userImage = user.photoURL;
    const cardId = card_id;
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...review, userId, userName, userImage, cardId };
    newReview[field] = value;
    setReviews(newReview);
  };
  return (
    <div>
      <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-white ">
        Reviews
      </h2>
      <div className="m-10 pr-52 flex items-center ">
        <form onSubmit={handleReviews} className="w-full ">
          <input
            onBlur={handleInputBlur}
            className="bg-transparent p-5 rounded-lg text-white w-full text-2xl m-5"
            type="text"
            placeholder="Add your Review"
            name="review"
          />
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 float-right"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiveReview;
