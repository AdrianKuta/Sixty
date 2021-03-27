import PropTypes from 'prop-types';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { useEffect } from 'react';
import { MenuContainer, MenuWrapper } from './styles';
import { GenreModel } from '../../constants/propTypes/GenreModel';
import MenuItem from './MenuItem';

const Menu = ({ selectedGenreId, genres, setFocus, onSelectedGenre }) => {
  const onItemClick = (genre) => {
    onSelectedGenre?.(genre);
  };

  useEffect(() => {
    if (genres?.length) {
      setFocus(genres[0].id);
    }
  }, [genres]);

  return (
    <MenuContainer>
      <MenuWrapper>
        {Array.from(genres, (genreItem) => (
          <MenuItem
            onEnterPress={() => onItemClick(genreItem)}
            key={genreItem.id}
            genre={genreItem}
            focusKey={genreItem.id}
            selected={genreItem.id === selectedGenreId}
          />
        ))}
      </MenuWrapper>
    </MenuContainer>
  );
};

Menu.propTypes = {
  selectedGenreId: PropTypes.number,
  genres: PropTypes.arrayOf(GenreModel),
  setFocus: PropTypes.func,
  onSelectedGenre: PropTypes.func,
};

export default withFocusable()(Menu);
