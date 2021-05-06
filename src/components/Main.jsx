import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Button, Col, Container, Form, FormLabel, Row,
} from 'react-bootstrap';
import PenguinContainer from './PenguinContainer';

const Main = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [tuxedoSize, setTuxedoSize] = useState(0);

  const [updated, setUpdated] = useState(true);

  const [penguins, setPenguins] = useState([{
    id: 1, name: 'pingu', age: 27, tuxedoSize: 44,
  }]);

  useEffect(() => {
    axios.get('http://localhost:8080/getPenguins')
      .then((res) => {
        setPenguins(res.data);
        setUpdated(false);
        setName('');
        setAge(0);
        setTuxedoSize(0);
      }).catch((err) => {
        console.log(err);
      });
  }, [updated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/createPenguin', { name, age, tuxedoSize })
      .then(() => setUpdated(true))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col lg={2}>
          <Form onSubmit={handleSubmit}>
            <FormLabel>Name</FormLabel>
            <Form.Control name="name" autoFocus value={name} onInput={(e) => setName(e.target.value)} required />
            <FormLabel>Age</FormLabel>
            <Form.Control name="name" type="number" value={age} min={0} onInput={(e) => setAge(e.target.value)} />
            <FormLabel>Tuxedo Size</FormLabel>
            <Form.Control name="name" type="number" value={tuxedoSize} min={0} onInput={(e) => setTuxedoSize(e.target.value)} className="mb-2" />
            <Button variant="primary" type="reset">Reset</Button>
            {' '}
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
        <Col lg={10}>
          <PenguinContainer penguins={penguins} setUpdated={setUpdated} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
