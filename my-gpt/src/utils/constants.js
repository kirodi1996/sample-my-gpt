export const HEADER_LOGO_URL = 'https://www.jiocinema.com/images/jc_logo_v2.svg';
export const PHOTO_URL = 'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80'
export const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};
export const MOVIES_API_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const IMG_CDN_URL = "";