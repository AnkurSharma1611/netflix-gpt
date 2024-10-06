import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log("posterPath", posterPath);

  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="movie-img"></img>
    </div>
  );
};

export default MovieCard;