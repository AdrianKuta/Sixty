import PropTypes from 'prop-types';
import { MenuItemStyled } from './styles';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const MenuItem = ({ genre, focused }) => {
  return (
    <MenuItemStyled focused={focused}>
      {genre.name}
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  focused: PropTypes.bool,
};

export const FocusableMenuItem = withFocusable()(MenuItem);
