import { withFocusable } from '@noriginmedia/react-spatial-navigation';
import { MovieModel } from '../../constants/propTypes/MovieModel';
import {
  ButtonsLayout,
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
import { useEffect } from 'react';
import Button from '../Button/Button';

const MovieDetails = ({ movie, visible, setFocus }) => {
  console.log(movie);
  useEffect(() => {
    setFocus();
  }, []);

  return (
    <MovieDetailsContainer>
      <MovieDetailsWrapper visible={visible}>
        <Title>{movie?.title}</Title>
        <ColumnLayout>
          <Column width={'66%'}>
            <MetaInfoLayout>
              <MetaInfo label={'Duration'} value={'1h 20min'} />
              <MetaInfo label={'Country'} value={'USA'} />
              <MetaInfo label={'Language'} value={movie?.original_language} />
            </MetaInfoLayout>
            <Cover backdrop_path={movie?.backdrop_path} />
            <ButtonsLayout>
              <Button title={'Watch'} />
              <Button title={'Trailer'} />
              <Button title={'Add to list'} />
            </ButtonsLayout>
          </Column>
          <Column width={'34%'}>
            <Description>{movie?.overview}</Description>
          </Column>
        </ColumnLayout>
      </MovieDetailsWrapper>
    </MovieDetailsContainer>
  );
};

MovieDetails.propTypes = {
  movie: MovieModel,
  visible: PropTypes.bool,
  onPressKey: PropTypes.func,
  setFocus: PropTypes.func,
  updateAllSpatialLayouts: PropTypes.func,
  stealFocus: PropTypes.func,
};

export default withFocusable({ blockNavigationOut: true, forgetLastFocusedChild: true })(
  MovieDetails,
);
