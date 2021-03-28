import PropTypes from 'prop-types';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { GridWrapper } from './styles';
import { chunk } from 'lodash';
import GridRow from './GridRow';
import { useCallback, useEffect, useMemo } from 'react';

const Grid = ({ movies, onLoadMore, onItemClick, focusable, columns = 5, setFocus }) => {
  useEffect(() => {
    if (focusable) {
      setFocus();
    }
  }, [focusable]);

  const scrollTo = ({ node }, { index }) => {
    node.scrollIntoView({ behavior: 'auto', block: 'center' });
    if (index === chunks.length - 2) {
      onLoadMore?.();
    }
  };

  const chunks = useMemo(() => chunk(movies, columns), [columns, movies]);

  const GridRows = useCallback(
    () =>
      chunks.map((chunk, index) => (
        <GridRow
          index={index}
          onBecameFocused={scrollTo}
          key={`GridRow-${index}`}
          focusKey={`GridRow-${index}`}
          movies={chunk}
          onItemClick={onItemClick}
        />
      )),
    [chunks],
  );

  return (
    <GridWrapper>
      <GridRows />
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
