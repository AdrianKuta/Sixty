import React, { useState } from 'react';
import useGetGenres from '../../api/use-get-genres.hook';
import { BaseLayout, PageContainer } from './styles';
import Catalog from '../../components/Catalog/Catalog';
import Menu from '../../components/Menu/Menu';

const Home = () => {
  const { data, isLoading, error } = useGetGenres();
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [selectedMovie, setSelectedMovie] = useState();

  const onItemClick = ({ movie }) => {
    console.log(movie);
  };

  return (
    <PageContainer>
      <BaseLayout>
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
