import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { MovieModel } from '../../constants/propTypes/MovieModel';
import {
  Column,
  ColumnLayout,
  Cover,
  Description,
  MovieDetailsContainer,
  MovieDetailsWrapper,
  Title,
} from './styles';
import PropTypes from 'prop-types';
import { MetaInfoLayout } from './MetaInfo/styles';
import MetaInfo from './MetaInfo/MetaInfo';
import { useEffect, useState } from 'react';

const MovieDetails = ({ movie }) => {
  const [visible, setVisible] = useState(false);
  const [visibleMovie, setVisibleMovie] = useState();
  useEffect(() => {
    if (movie) {
      setVisible(true);
      setVisibleMovie(movie);
    } else {
      setVisible(false);
      const timeout = setTimeout(() => setVisibleMovie(undefined), 1000);
      return () => clearTimeout(timeout);
    }
  }, [movie]);

  return (
    <MovieDetailsContainer>
      <MovieDetailsWrapper visible={visible}>
        <Title>{visibleMovie?.title}</Title>
        <ColumnLayout>
          <Column width={'66%'}>
            <MetaInfoLayout>
              <MetaInfo label={'Duration'} value={'1h 20min'} />
              <MetaInfo label={'Country'} value={'USA'} />
              <MetaInfo label={'Language'} value={'English'} />
            </MetaInfoLayout>
            <Cover backdrop_path={visibleMovie?.backdrop_path} />
          </Column>
          <Column width={'34%'}>
            <Description>{visibleMovie?.overview}</Description>
          </Column>
        </ColumnLayout>
      </MovieDetailsWrapper>
    </MovieDetailsContainer>
  );
};

MovieDetails.propTypes = {
  movie: MovieModel,
  onPressKey: PropTypes.func,
};

export default withFocusable()(MovieDetails);
