import styled from 'styled-components';
import PropTypes from 'prop-types';

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

GridWrapper.propTypes = {
  offset: PropTypes.number,
};

export const GridRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  > * {
    width: ${() => `${100 / 5}%`};
  }
`;
