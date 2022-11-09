import React from "react";

const ShowReviews = ({ review, cardID }) => {
  return (
    <div className="text-white flex">
      {review.cardId == cardID ? (
        <>
          <div className="border-2 m-5 flex w-full p-10 rounded-xl">
            <div className="mr-10">
              <img
                className="rounded-full w-32"
                src={review.userImage}
                alt=""
              />
            </div>
            <div className="text-left text-2xl w-full ">
              <div className="flex justify-between p-2 items-center">
                <h2 className="text-5xl">{review.userName}</h2>
                <p className="float-right">
                  {review.date.slice(0, 10)} | {review.date.slice(11, 19)}
                </p>
              </div>
              <div className="border-2 p-5 text-3xl rounded-xl">
                <p className="">Reviews:</p>
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowReviews;
