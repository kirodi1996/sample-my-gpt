import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(MOVIES_API_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (e) {

      }
    };
  
    useEffect(() => {
      getNowPlayingMovies()
    },[]);
};

export default useNowPlayingMovies;