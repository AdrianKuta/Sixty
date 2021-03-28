import PropTypes from 'prop-types';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { GridWrapper } from './styles';
import { useEffect, useMemo } from 'react';
import MovieCard from '../MovieCard/MovieCard';

const Grid = ({ movies, onLoadMore, onItemClick, focusable, columns = 5, setFocus }) => {
  useEffect(() => {
    if (focusable) {
      setFocus();
    }
  }, [focusable]);

  const scrollTo = ({ node }, { index }) => {
    node.scrollIntoView({ behavior: 'auto', block: 'center' });
    if (index > movies.length - columns * 2) {
      onLoadMore?.();
    }
  };

  const Cards = useMemo(
    () =>
      movies.map((movie, index) => (
        <MovieCard
          index={index}
          key={movie.id}
          movie={movie}
          focusKey={`GridItem-${index}`}
          onEnterPress={onItemClick}
          onBecameFocused={scrollTo}
        />
      )),
    [movies],
  );

  return (
    <GridWrapper>
      {Cards}
    </GridWrapper>
  );
};

Grid.propTypes = {
  movies: PropTypes.array,
  onLoadMore: PropTypes.func,
  columns: PropTypes.number,
  onItemClick: PropTypes.func,
  focusable: PropTypes.bool,
  setFocus: PropTypes.func,
};

export default withFocusable()(Grid);
