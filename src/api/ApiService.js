import axios from 'axios';

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
