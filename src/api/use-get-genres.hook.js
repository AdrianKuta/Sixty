import { fetchGenres } from './ApiService';
import { useQuery } from 'react-query';

const useGetGenres = () => {
  const { data, isLoading, error } = useQuery('genres', fetchGenres);

  return {
    data: data?.genres ?? [],
    isLoading,
    error,
  };
};

export default useGetGenres;
