import styled from 'styled-components';
import PropTypes from 'prop-types';

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  > * {
    width: ${({ columns }) => `${100 / columns}%`};
    min-width: ${({ columns }) => `${100 / columns}%`};
    padding-top: ${({ columns }) => `${150 / columns}%`};
  }
`;

GridWrapper.propTypes = {
  columns: PropTypes.number.isRequired,
};
