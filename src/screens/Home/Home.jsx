import React, { useEffect, useState } from 'react';
import useGetGenres from '../../api/use-get-genres.hook';
import { BaseLayout, PageContainer } from './styles';
import Catalog from '../../components/Catalog/Catalog';
import Menu from '../../components/Menu/Menu';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import { KeyCodes } from '../../constants/KeyCodes';

const Home = () => {
  const { data } = useGetGenres();
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

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
      <MovieDetails movie={selectedMovie} />
      <BaseLayout collapsed={selectedMovie}>
        <Menu
          selectedGenreId={selectedGenreId}
          onSelectedGenre={(genre) => setSelectedGenreId(genre.id)}
          genres={data}
        />
        <Catalog genreId={selectedGenreId} onItemClick={onItemClick} />
      </BaseLayout>
    </PageContainer>
  );
};

export default Home;
