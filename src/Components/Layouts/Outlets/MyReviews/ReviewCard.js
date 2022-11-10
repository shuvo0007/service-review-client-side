import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

const ReviewCard = ({ user, reviews }) => {
  const [reviewDisplay, setReviewDisplay] = useState(reviews);

  const handleDelete = (review) => {
    const agree = window.confirm(
      `Are you sure you want to delete: ${reviews.review}`
    );
    console.log(agree);
    if (agree) {
      console.log("Deleting review with id:", reviews._id);
      fetch(`http://localhost:5000/reviews/${reviews._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Review deleted Successfully");
            const remainingUsers = reviewDisplay.filter(
              (usr) => usr._id !== reviews._id
            );
            console.log("ami asi", remainingUsers);
            setReviewDisplay(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      {user.uid == reviews.userId ? (
        <div
          className="border-2 m-5 mx-28
          text-3xl text-left
        p-10 px-32 rounded-xl"
        >
          <h2 className="mb-3">
            Category: <span>{reviews.cardName}</span>
          </h2>
          <div className="float-right text-white flex">
            <Link to={`/private/update/${reviews._id}`}>
              <TbEdit size={40} />
            </Link>
            <Link onClick={() => handleDelete(reviews.review)}>
              <MdDeleteForever size={40} />
            </Link>
          </div>
          <p>
            Review: <span className="text-2xl">{reviews.review}</span>
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewCard;
