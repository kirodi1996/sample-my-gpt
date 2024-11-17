import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIES_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      try {
        const data = await fetch(MOVIES_API_URL, API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      } catch (e) {

      }
    };
  
    useEffect(() => {
      getPopularMovies()
    },[]);
};

export default usePopularMovies;