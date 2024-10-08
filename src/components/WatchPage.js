import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovietrailer from "../hooks/useMovieTrailer";
import { BG_URL } from "../utils/constants";

const WatchPage = () => {
  const { movieId } = useParams();
  useMovietrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);


  return (
    <div className="w-screen h-full bg-black">
      {movieId && (<iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>)}
       {/* <img className="relative h-screen md:w-screen object-cover " src={BG_URL} alt="bg-img" /> */}
       <div className="md:hidden bg-black relative h-screen md:w-screen object-cover"></div>
    </div>
  );
};

export default WatchPage;
