import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewCard = ({ user, reviews }) => {
  const handleDelete = (review) => {
    fetch(
      `https://b6a11-service-review-server-side-shuvo0007.vercel.app/reviews/${reviews._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setTimeout(() => window.location.reload(), 3000);
          toast.success("Your Review is Deleted", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  return (
    <div>
      {user.uid == reviews.userId ? (
        <div
          className="border-2 m-5 mx-28
          text-3xl text-left
        p-10 px-32 rounded-xl grid grid-cols-12 items-center"
        >
          <div className="col-span-11">
            <h2 className="mb-3">
              Category: <span>{reviews.cardName}</span>
            </h2>
            <p>
              Review: <span className="text-2xl">{reviews.review}</span>
            </p>
          </div>
          <div className="float-right text-white flex w-22 justify-between ">
            <Link to={`/private/update/${reviews._id}`}>
              <TbEdit size={40} />
            </Link>
            <Link onClick={() => handleDelete(reviews.review)}>
              <MdDeleteForever size={40} />
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ReviewCard;
