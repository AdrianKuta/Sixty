import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MenuContainer = styled.div`
  height: 100%;
`;

export const MenuWrapper = styled.div`
  padding: 3rem;
`;

export const MenuItemStyled = styled.div`
  font-size: 1rem;
  color: ${({ focused, selected }) => (focused || selected ? 'white' : 'gray')};
  padding: 0.5rem 5rem 0.5rem 1rem;
  margin: 0.75rem;
  border: ${({ focused }) => focused && `0.06rem solid orange`};
`;

MenuItemStyled.propTypes = {
  focused: PropTypes.bool,
  selected: PropTypes.bool,
};
