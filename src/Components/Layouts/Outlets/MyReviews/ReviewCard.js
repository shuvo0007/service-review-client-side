import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";

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
            <Link to={`/private/update/${reviews._id}`}>
                <TbEdit size={40} />

            </Link>
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
