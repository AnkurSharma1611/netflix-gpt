import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img className="h-screen md:w-screen object-cover " src={BG_URL} alt="bg-img" />
      </div>
      <div >
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
