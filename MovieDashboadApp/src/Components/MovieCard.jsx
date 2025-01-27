import React, { useRef, useState } from "react";
import "./Styles/movie-card.css";
import { TruncateStrings } from "../models/UtilFunctions";
import { useDispatch } from "react-redux";
import {
  addToWishlist,
  addUserReview,
  removeFromWishlist,
} from "../store/moviesAndSeriesSlice";

function MovieCard({ moviesAndSeries }) {
  const ratingRef = useRef();
  const [rating, setRating] = useState(moviesAndSeries.userRating ?? "");

  const dispatch = useDispatch();

  const truncateStrings = (item) => TruncateStrings(item, 50);

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "#00FF00"; //Green
    if (rating >= 3.5) return "#FFD700"; //Yellow
    if (rating >= 2.5) return "#FFA500"; //Orange
    if (rating >= 1.5) return "#FF0000"; //Red
    return "#FF0000"; // Red
  };

  const handleInputRatgin = (value) => {
    if (value < 0 || value > 5) {
      ratingRef.current.style.borderColor = "red";
      console.error("Rating should be less than 5 and a postive number");
    } else {
      dispatch(addUserReview({ id: moviesAndSeries.id, userRating: value }));
      setRating(value);
      ratingRef.current.style.borderColor = "#ccc";
    }
  };

  const handleWishList = (alreadyInWishList) => {
    alreadyInWishList
      ? dispatch(removeFromWishlist(moviesAndSeries.id))
      : dispatch(addToWishlist(moviesAndSeries.id));
  };

  return (
    <div className="movie-card-wrapper">
      <h3 className="movie-title">{moviesAndSeries.name}</h3>
      <p className="movie-director">
        Director: {truncateStrings(moviesAndSeries.director.join(", "))}
      </p>
      <p className="movie-actors">
        Actors: {truncateStrings(moviesAndSeries.actors.join(", "))}
      </p>
      <p className="movie-awards">
        Awards: {truncateStrings(moviesAndSeries.awards.join(", "))}
      </p>
      {/* TODO make rating as different component */}
      <div className="rating-container">
        <input
          type="number"
          className="rating-input"
          min={0}
          max={5}
          ref={ratingRef}
          value={rating}
          onChange={(e) => handleInputRatgin(e.target.value)}
        ></input>
        <p
          className="average-rating"
          style={{ color: getRatingColor(moviesAndSeries.rating) }}
        >
          {moviesAndSeries.rating}
        </p>
      </div>
      {/* TODO instaed of text add heart or like icon */}
      <button
        className="wishlist-button"
        onClick={() => handleWishList(moviesAndSeries.isWishlisted)}
      >
        {moviesAndSeries.isWishlisted
          ? "Remove from WishList"
          : "Add to WishList"}
      </button>
    </div>
  );
}

export default MovieCard;
