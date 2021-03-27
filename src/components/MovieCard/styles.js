import styled from 'styled-components';
import PropTypes from 'prop-types';

export const CardWrapper = styled.div`
  padding: 0.25rem;
`;

export const CardInnerWrapper = styled.div`
  margin: ${({ focused }) => (focused ? '-0.2rem' : '0.25rem')};
  border: ${({ focused }) => (focused && '0.25rem solid orange')};
`;

CardInnerWrapper.propTypes = {
  focused: PropTypes.bool,
};

export const Poster = styled.img.attrs(({ posterPath }) => ({
  src: `https://image.tmdb.org/t/p/w500/${posterPath}`,
  loading: 'lazy',
}))`
  width: 100%;
`;

Poster.propTypes = {
  posterPath: PropTypes.string,
};
