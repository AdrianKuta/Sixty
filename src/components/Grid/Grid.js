import PropTypes from 'prop-types';
import useGetMovies from '../../api/use-get-movies.hook';
import { useEffect, useState } from 'react';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const Grid = ({ genreId }) => {
  const [pageToLoad, setPageToLoad] = useState(1);
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const { data, isLoading, error } = useGetMovies(genreId, pageToLoad);

  useEffect(() => {
    setFetchedMovies((old) => [...old, data.results]);
  }, [data]);

  const onLoadMore = () => {
    if (!isLoading) {
      setPageToLoad(data.page + 1);
    }
  };

  console.log(data);

  return <>{genreId}</>;
};

Grid.propTypes = {
  genreId: PropTypes.number,
};

export default withFocusable({ trackChildren: true })(Grid);
