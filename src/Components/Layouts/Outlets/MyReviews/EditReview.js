import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";

const EditReview = () => {
  useTitle("Edit Review");
  const navigate = useNavigate();
  const location = useLocation();
  const storedReview = useLoaderData();
  const [review, setReview] = useState(storedReview);

  const from = location.state?.from?.pathname || "/private/myReviews";

  const handleUpdateReview = (event) => {
    event.preventDefault();
    // console.log(user);
    fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // console.log(data);
          alert("Updated successfully");
          navigate(from, { replace: true });
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    console.log(field);
    const value = event.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div className="mx-52">
      <h2 className="font-2 text-xl text-center my-5">
        Your Previous Review:{" "}
        <span className="text-gray-400">{storedReview.review}</span>
      </h2>
      <form onSubmit={handleUpdateReview}>
        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-300">
          <div className="py-4 px-4 bg-gray-200 rounded-t-lg border-gray-900">
            <textarea
              onChange={handleInputChange}
              defaultValue={storedReview.review}
              type="text"
              name="review"
              id="comment"
              rows="10"
              className="font-2 w-full text-xl text-gray-600 bg-white border-0 p-2"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <div className="text-center bg-gray-200">
            <button
              type="submit"
              className="font-2 bg-white hover:bg-gray-500 hover:text-white text-gray-800 font-semibold  px-5 py-5 border border-gray-400 rounded shadow 
                    transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 my-10 mr-2"
            >
              Update review
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
