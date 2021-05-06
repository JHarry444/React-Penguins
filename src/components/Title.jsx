import PropTypes from 'prop-types';

const Title = ({ text }) => <h1>{text}</h1>;

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
