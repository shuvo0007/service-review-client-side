import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import GiveReview from "./GiveReview";
import ShowReviews from "./ShowReviews";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const CardDetails = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-shuvo0007.vercel.app/reviews"
    )
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  const card = useLoaderData();
  useTitle("Details");
  return (
    <div className="">
      <div className="flex m-10 p-5 border-2 rounded-lg">
        <PhotoProvider>
          <PhotoView key={card._id} src={card.image}>
            <img
              src={card.image}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://media.istockphoto.com/id/628925698/vector/pile-of-hardcover-books.jpg?s=612x612&w=0&k=20&c=UskxzCZAQ4LXrgMhgW3M8Q5jdtWFPZ8WxwosF6h6euI=";
              }}
              alt=""
              className="w-96"
            />
          </PhotoView>
        </PhotoProvider>

        <div className="text-left text-white m-5">
          <h2 className="text-5xl mb-6">{card.name}</h2>
          <p className="text-2xl w-11/12 text-justify">{card.details}</p>
          <p className="p-5 text-2xl border-2 text-gray-900 bg-gradient-to-r from-lime-300 via-lime-600 to-lime-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg px-5 py-2.5 text-center mt-5">
            Price: {card.price} tk/month
          </p>
        </div>
      </div>
      <GiveReview card_id={card._id} card_name={card.name}></GiveReview>

      {allReviews
        .slice()
        .reverse()
        .map((review) => (
          <ShowReviews
            key={review._id}
            review={review}
            cardID={card._id}
          ></ShowReviews>
        ))}
    </div>
  );
};

export default CardDetails;
