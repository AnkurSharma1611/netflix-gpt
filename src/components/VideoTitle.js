import React, { useEffect, useState } from "react";
import myIcon from "../images/play.svg";
import infoIcon from "../images/info.svg";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [shouldFade, setShouldFade] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShouldFade(true); // Trigger fade out by updating opacity
    }, 3000);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  const showMoreInfo = () => {
    setShowInfo(!showInfo);
    setIsVisible(false);
  };

  const movieInfoText = (overview, limit) => {
    let wordsArray = overview.split(" ");
    if (wordsArray.length <= limit) {
      return overview;
    }
    return wordsArray.slice(0, limit).join(" ") + "...";
  };

  const limitedText = movieInfoText(overview, 25);

  const showTrailer = () => {
    navigate(`/browse/watch/${movieId}`);
  };

  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      {/* {isVisible && (
        <p className="hidden md:inline-block py-6 text-lg w-1/4 ">{overview}</p>
      )} */}
      {isVisible && (
        <p
          className={`transition-opacity duration-5000 ease-in-out ${
            shouldFade ? "opacity-0" : "opacity-100"
          } hidden md:inline-block py-6 text-lg w-1/4`}
        >
          {limitedText}
        </p>
      )}
      <div className={` ${!isVisible ? " md:py-6 " : "py-0"} my-4 md:my-0`}>
        <button className="bg-white text-black py-1 px-3 md:py-3 md:px-10 text-xl rounded-lg hover:bg-opacity-80">
          <div onClick={showTrailer} className="flex flex-row items-center">
            <img className="w-7 md:w-10 " src={myIcon} alt="play-icon" />
            <p className="">Play</p>
          </div>
        </button>
        <button
          className={`${
            showInfo ? "border-2 border-white bg-opacity-100 " : ""
          } hidden md:inline-block mx-2 bg-gray-500 text-black p-3 px-7 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-100`}
        >
          <div onClick={showMoreInfo} className="flex flex-row items-center">
            <img className="md:w-10" src={infoIcon} alt="info-icon" />
            <p>More Info</p>
          </div>
        </button>
      </div>
      {showInfo && (
        <div className="hidden md:inline-block">
          <h2>{overview}</h2>
        </div>
      )}
    </div>
  );
};

export default VideoTitle;
