import styled from 'styled-components';
import PropTypes from 'prop-types';

export const ButtonStyled = styled.div`
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: ${({ focused }) => (focused ? `orange` : `black`)};
`;

ButtonStyled.propTypes = {
  focused: PropTypes.bool,
};
