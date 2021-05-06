import PropTypes from 'prop-types';
import { CardGroup } from 'react-bootstrap';
import Penguin from './Penguin';

const PenguinContainer = ({ penguins, setUpdated }) => {
  const renderedPenguins = penguins.map(({
    id, name, age, tuxedoSize,
  }) => (
    <Penguin
      key={id}
      id={id}
      name={name}
      age={age}
      tuxedoSize={tuxedoSize}
      setUpdated={setUpdated}
    />
  ));

  return (
    <CardGroup className="row row-cols-4 g-4">
      { renderedPenguins }
    </CardGroup>
  );
};
export default PenguinContainer;

PenguinContainer.propTypes = {
  penguins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    tuxedoSize: PropTypes.number.isRequired,
  })).isRequired,
  setUpdated: PropTypes.func.isRequired,
};
