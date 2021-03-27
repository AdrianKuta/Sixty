import React, { useState } from 'react';
import useGetGenres from '../../api/use-get-genres.hook';
import { FocusableMenu } from '../../components/Menu/Menu';
import { BaseLayout } from './styles';
import Grid from '../../components/Grid/Grid';

const Home = () => {
  const { data, isLoading, error } = useGetGenres();
  const [selectedGenreId, setSelectedGenreId] = useState();

  return (
    <BaseLayout>
      <FocusableMenu onSelectedGenre={(genre) => setSelectedGenreId(genre.id)} genres={data} />
      <Grid genreId={selectedGenreId} />
    </BaseLayout>
  );
};

export default Home;
