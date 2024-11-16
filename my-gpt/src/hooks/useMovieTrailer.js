import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  
  // fetching the trailer video and updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = fetch(movieId, API_OPTIONS)
    const json = data.json();
    const filterData = json.results.filter((video) => video.type === 'trailer');
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer))
  };
  useEffect(() => {
    getMovieVideos()
  }, []);
}

export default useMovieTrailer;