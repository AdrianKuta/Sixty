import PropTypes from 'prop-types';
import { MenuItemStyled } from './styles';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const MenuItem = ({ genre, focused, selected }) => {
  return (
    <MenuItemStyled focused={focused} selected={selected}>
      {genre.name}
      {selected && ' >'}
    </MenuItemStyled>
  );
};

MenuItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  focused: PropTypes.bool,
  selected: PropTypes.bool,
};

export default withFocusable()(MenuItem);
