import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

export const MovieDetailsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  right: 0;
  width: 70%;
  height: 100%;
  margin-right: 5%;
`;

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: opacity 0.5s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

MovieDetailsWrapper.propTypes = {
  visible: PropTypes.bool,
};

export const ColumnLayout = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  > * {
    margin-right: 2rem;
  }

  > *:last-child {
    margin-right: 0;
  }
`;

export const Column = styled.div`
  width: ${({ width }) => width};
`;

Column.propTypes = {
  width: PropTypes.string,
};

export const Title = styled.div`
  font-weight: 300;
  font-size: 4rem;
`;

export const Description = styled.div`
  color: lightgray;
  font-size: 1.5rem;
`;

export const Cover = styled.img.attrs(({ backdrop_path }) => ({
  src: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
  loading: 'lazy',
}))`
  width: 100%;
`;

Cover.propTypes = {
  backdrop_path: PropTypes.string,
};

export const ButtonsLayout = withFocusable()(styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: stretch;
  margin-top: 1rem;

  > * {
    width: 100%;
    margin-right: 1rem;
  }

  > *:last-child {
    margin-right: 0;
  }
`);
