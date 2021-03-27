import React, { useState } from 'react';
import useGetGenres from '../../api/use-get-genres.hook';
import { BaseLayout } from './styles';
import Catalog from '../../components/Catalog/Catalog';
import Menu from '../../components/Menu/Menu';

const Home = () => {
  const { data, isLoading, error } = useGetGenres();
  const [selectedGenreId, setSelectedGenreId] = useState();

  return (
    <BaseLayout>
      <Menu
        selectedGenreId={selectedGenreId}
        onSelectedGenre={(genre) => setSelectedGenreId(genre.id)}
        genres={data}
      />
      <Catalog genreId={selectedGenreId} />
    </BaseLayout>
  );
};

export default Home;
