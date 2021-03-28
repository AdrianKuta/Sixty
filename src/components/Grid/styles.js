import styled from 'styled-components';
import PropTypes from 'prop-types';

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  > * {
    width: ${() => `${100 / 5}%`};
  }
`;

GridWrapper.propTypes = {
  offset: PropTypes.number,
};
