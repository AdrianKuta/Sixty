import React from 'react';
import useGetGenres from '../../api/use-get-genres.hook';
import Menu from '../../components/Menu/Menu';

const Home = () => {
  const { data, isLoading, error } = useGetGenres();

  return (
    <div>
      <Menu genres={data} />
    </div>
  );
};

export default Home;
