import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;

  return (
    <div
      className="w-36 md:w-48 pr-4 hover:scale-75"
    >
      <img src={IMG_CDN_URL + posterPath} alt="movie-img"></img>
    </div>
  );
};

export default MovieCard;
