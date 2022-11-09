import React from "react";

const ShowReviews = ({ review, cardID }) => {
  return (
    <div className="text-white flex">
      {review.cardId == cardID ? (
        <>
          <div>
            <img className="rounded-full w-32" src={review.userImage} alt="" />
          </div>
          <div className="text-left ">
            <h2>{review.userName}</h2>
            <p>
              Reviews: <span>{review.review}</span>
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowReviews;
