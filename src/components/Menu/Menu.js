import PropTypes from 'prop-types';

const Menu = ({ genres }) => {
  return (
    <div>
      {Array.from(genres, (genreItem) => (
        <p>{genreItem.name}</p>
      ))}
    </div>
  );
};

Menu.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

export default Menu;
