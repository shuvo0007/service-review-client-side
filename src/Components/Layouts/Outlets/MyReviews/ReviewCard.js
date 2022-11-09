import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

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
          <div className="float-right text-white flex">
            <button>
              <TbEdit size={40} />
            </button>
            <button>
              <MdDeleteForever size={40} />
            </button>
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
