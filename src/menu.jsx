import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Menu() {
  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4">Menú de Los Jochos DEL OCHO</h2>
      <Row>
        <Col md={12}>
          <ul className="list-group">
            <li className="list-group-item">Jochos Clásicos - $X.XX</li>
            <li className="list-group-item">Jochos Especiales - $X.XX</li>
            <li className="list-group-item">Bebidas y Postres - $X.XX</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Menu;
