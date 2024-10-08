import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GOOGLE_GEMINI_KEY } from "../utils/constants";
import { adGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  // Search Movie in TMDB database
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommandation system suggest some movies for the query :  " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Dhoom, Koi Mil Gaya";

    const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_KEY);

    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const moviesSearchApi = response.text();
      const gptMovies = moviesSearchApi.split(", ");
      return gptMovies;
    }

    try {
      // Get the GPT movie recommendations
      const moviesResponse = await run();

      if (!moviesResponse || moviesResponse.length === 0) {
        console.error("No movies returned from GPT");
        return; // Exit early if no movies are returned
      }
      const promiseArray = moviesResponse.map((movie) =>
        searchMovieTMDB(movie)
      );

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        adGptMovieResult({
          movieNames: moviesResponse,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("Error:", error); // Handle errors from GPT or TMDB API
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
