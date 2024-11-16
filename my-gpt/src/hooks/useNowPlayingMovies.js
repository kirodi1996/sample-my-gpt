import { useDispatch } from "react-redux";
import { MOVIES_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(MOVIES_API_URL, API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovies()
    },[]);
};

export default useNowPlayingMovies;