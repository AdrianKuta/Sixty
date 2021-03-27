import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MenuItemStyled = styled.div`
  color: ${({ focused }) => (focused ? 'white' : 'gray')};
  padding: 0.25rem;
  margin: 0.75rem;
  border: ${({ focused }) => focused && `2px solid orange`};
`;

MenuItemStyled.propTypes = {
  focused: PropTypes.bool,
};
