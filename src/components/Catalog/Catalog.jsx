import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import useGetMovies from '../../api/use-get-movies.hook';
import { CatalogContainer, CatalogWrapper } from './styles';
import Grid from '../Grid/Grid';

const Catalog = ({ genreId, onItemClick, focusable = true }) => {
  const [pageToLoad, setPageToLoad] = useState(1);
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const { data, isLoading } = useGetMovies(genreId, pageToLoad);

  useEffect(() => {
    setFetchedMovies([]);
  }, [genreId]);

  useEffect(() => {
    if (data?.results?.length) {
      setFetchedMovies((old) => [...old, ...data.results]);
    }
  }, [data?.results]);

  const onLoadMore = () => {
    if (!isLoading) {
      setPageToLoad(data.page + 1);
    }
  };
  return (
    <CatalogContainer>
      <CatalogWrapper>
        <Grid
          columns={5}
          onItemClick={onItemClick}
          movies={fetchedMovies}
          onLoadMore={onLoadMore}
          focusKey={'Grid'}
          focusable={focusable}
        />
      </CatalogWrapper>
    </CatalogContainer>
  );
};

Catalog.propTypes = {
  genreId: PropTypes.number,
  onItemClick: PropTypes.func,
  focusable: PropTypes.bool,
};

export default Catalog;
