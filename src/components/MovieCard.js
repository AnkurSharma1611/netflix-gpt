import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  const navigate = useNavigate();
  if (!posterPath) return;
  const watchPage = () => {
    navigate(`/browse/watch/${movieId}`);
  }

  return (
    <div onClick={watchPage} className="cursor-pointer w-36 md:w-48 pr-4 hover:scale-75">
      <img src={IMG_CDN_URL + posterPath} alt="movie-img"></img>
    </div>
  );
};

export default MovieCard;
