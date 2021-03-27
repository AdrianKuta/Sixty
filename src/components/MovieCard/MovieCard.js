import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { MovieModel } from '../../constants/propTypes/MovieModel';
import { CardWrapper, CardInnerWrapper, Poster } from './styles';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, focused }) => {
  return (
    <CardWrapper>
      <CardInnerWrapper focused={focused}>
        <Poster posterPath={movie.poster_path} />
      </CardInnerWrapper>
    </CardWrapper>
  );
};

MovieCard.propTypes = {
  movie: MovieModel,
  focused: PropTypes.bool,
};

export default withFocusable()(MovieCard);
