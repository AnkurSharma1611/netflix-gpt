import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovietrailer from "../hooks/useMovieTrailer";
import { BG_URL } from "../utils/constants";

const WatchPage = () => {
  const { movieId } = useParams();
  useMovietrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const playOnYoutube = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=" + trailerVideo?.key;
  };

  return (
    <div className="w-screen fixed bg-black">
      {movieId && (
        <iframe
          className="w-screen aspect-video flex align-middle md:m-0 mt-[0%]"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      <div className="hidden md:inline-block bg-black relative h-screen md:w-screen object-cover"></div>
      <div className="md:hidden bg-black relative h-screen md:w-screen object-cover text-white text-center mt-[10%]">
        <h1>Mobile View</h1>
        <button
          onClick={playOnYoutube}
          className="bg-red-600 m-[5%] p-[2.5%] rounded-xl"
        >
          Watch on Youtube
        </button>
      </div>
    </div>
  );
};

export default WatchPage;
