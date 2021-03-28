import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import { useCallback } from 'react';
import { GridRowWrapper } from './styles';
import { MovieModel } from '../../constants/propTypes/MovieModel';

const GridRow = ({ movies, onItemClick }) => {
  const Cards = useCallback(
    () =>
      movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} focusKey={movie.id} onEnterPress={onItemClick} />
      )),
    [movies],
  );

  return (
    <GridRowWrapper>
      <Cards />
    </GridRowWrapper>
  );
};

GridRow.propTypes = {
  movies: PropTypes.arrayOf(MovieModel),
  onItemClick: PropTypes.func,
};

export default withFocusable()(GridRow);
