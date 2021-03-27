import axios from 'axios';
import PropTypes from 'prop-types';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '889abe3247f9348a43ba33d2c9270735',
  },
});

export const fetchGenres = async () => {
  const { data } = await instance.get('/genre/movie/list');
  return data;
};

export const fetchMovies = async (genreId, page) => {
  const { data } = await instance.get('/discover/movie', {
    params: {
      with_genres: genreId,
      page,
    },
  });
  return data;
};

fetchMovies.propType = {
  genreId: PropTypes.number,
  page: PropTypes.number,
};
