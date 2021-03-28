import React, { useEffect, useState } from 'react';
import useGetGenres from '../../api/use-get-genres.hook';
import { BaseLayout, PageContainer } from './styles';
import Catalog from '../../components/Catalog/Catalog';
import Menu from '../../components/Menu/Menu';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { KeyCodes } from '../../constants/KeyCodes';
import useDelayedUndefinedState from '../../hooks/use-delayed-undefined-state.hook';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const Home = () => {
  const { data } = useGetGenres();
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [isMovieSelected, delayedSelectedMovie] = useDelayedUndefinedState(selectedMovie, 1000);

  const onItemClick = ({ movie }) => {
    setSelectedMovie(movie);
  };

  const onPressKey = (event) => {
    if (event.keyCode === KeyCodes.RETURN) {
      setSelectedMovie(undefined);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onPressKey);
    return () => window.removeEventListener('keydown', onPressKey);
  }, []);

  return (
    <PageContainer>
      {delayedSelectedMovie && (
        <MovieDetails movie={delayedSelectedMovie} visible={isMovieSelected} />
      )}
      <BaseLayout collapsed={isMovieSelected}>
        <Menu
          selectedGenreId={selectedGenreId}
          onSelectedGenre={(genre) => setSelectedGenreId(genre.id)}
          genres={data}
          focusable={!isMovieSelected}
        />
        <Catalog genreId={selectedGenreId} onItemClick={onItemClick} focusable={!isMovieSelected} />
      </BaseLayout>
    </PageContainer>
  );
};

export default withFocusable()(Home);
