import PropTypes from 'prop-types';
import { FocusableMenuItem } from './MenuItem';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { useEffect } from 'react';

const Menu = ({ genres, setFocus, onSelectedGenre }) => {
  const onItemClick = (genre) => {
    onSelectedGenre?.(genre);
  };

  useEffect(() => {
    if (genres?.length) {
      setFocus(genres[0].id);
    }
  }, [genres]);

  return (
    <div>
      {Array.from(genres, (genreItem) => (
        <FocusableMenuItem
          onEnterPress={() => onItemClick(genreItem)}
          key={genreItem.id}
          genre={genreItem}
          focusKey={genreItem.id}
        />
      ))}
    </div>
  );
};

Menu.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  setFocus: PropTypes.func,
  onSelectedGenre: PropTypes.func,
};

export const FocusableMenu = withFocusable({ trackChildren: true })(Menu);
