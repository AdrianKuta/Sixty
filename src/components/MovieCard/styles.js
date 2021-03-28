import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CardContainer = styled.div`
  position: relative;
  height: 0;
  z-index: ${({ focused }) => (focused ? 2 : 1)};
`;

export const CardInnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const PosterWrapper = styled.div`
  transition: margin 0.25s;
  margin: ${({ focused }) => (focused ? '-0.25rem' : '0.5rem')};
  border: ${({ focused }) => focused && '0.25rem solid orange'};
`;

PosterWrapper.propTypes = {
  focused: PropTypes.bool,
};

export const Poster = styled.img.attrs(({ posterPath }) => ({
  src: `https://image.tmdb.org/t/p/w500/${posterPath}`,
  loading: 'lazy',
}))`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

Poster.propTypes = {
  posterPath: PropTypes.string,
};
