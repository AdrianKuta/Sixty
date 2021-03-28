import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { MovieModel } from '../../constants/propTypes/MovieModel';
import { CardContainer, CardInnerWrapper, Poster, PosterWrapper } from './styles';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, focused }) => {
  return (
    <CardContainer focused={focused}>
      <CardInnerWrapper>
        <PosterWrapper focused={focused}>
          <Poster posterPath={movie.poster_path} />
        </PosterWrapper>
      </CardInnerWrapper>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  movie: MovieModel,
  focused: PropTypes.bool,
};

export default withFocusable()(MovieCard);
