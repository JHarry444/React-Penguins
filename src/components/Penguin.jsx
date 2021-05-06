import axios from 'axios';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';

const Penguin = ({
  id, name, age, tuxedoSize, setUpdated,
}) => {
  const deletePenguin = () => {
    axios.delete(`http://localhost:8080/removePenguin/${id}`)
      .then(() => setUpdated(true))
      .catch((err) => console.log(err));
  };

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
          <Card.Text>
            {`Age: ${age}`}
            <br />
            {`Tuxedo Size: ${tuxedoSize}`}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link onClick={deletePenguin}>Delete</Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default Penguin;

Penguin.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  tuxedoSize: PropTypes.number.isRequired,
  setUpdated: PropTypes.func.isRequired,
};
