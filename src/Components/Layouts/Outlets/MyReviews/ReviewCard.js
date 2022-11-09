import React from "react";

const ReviewCard = ({ user, reviews }) => {
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
