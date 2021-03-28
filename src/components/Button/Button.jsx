import { ButtonStyled } from './styles';
import PropTypes from 'prop-types';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const Button = ({ title, focused }) => {
  return <ButtonStyled focused={focused}>{title}</ButtonStyled>;
};

Button.propTypes = {
  title: PropTypes.string,
  focused: PropTypes.bool,
};

export default withFocusable()(Button);
