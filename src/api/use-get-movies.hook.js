import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { fetchMovies } from './ApiService';

const useGetMovies = (genreId, page = 1) => {
  const { data, isLoading, error } = useQuery(['movies', genreId, page], fetchMovies);

  return {
    data,
    isLoading,
    error,
  };
};

useGetMovies.propTypes = {
  genreId: PropTypes.number.isRequired,
  page: PropTypes.number,
};

export default useGetMovies;
