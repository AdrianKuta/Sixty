import PropTypes from 'prop-types';
import { withFocusable } from '@noriginmedia/react-spatial-navigation';

const MovieCard = (title) => {
  return <div>{title}</div>;
};

MovieCard.propTypes = {
  title: PropTypes.string,
};

export default withFocusable()(MovieCard);
