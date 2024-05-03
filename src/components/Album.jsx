import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function Album(props) {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/cb/48/d5/cb48d597ed60ceb7e2095d496f3bf051.jpg" style={{ width: "100%", height: "auto" }} />
            <Card.Body>
              <Card.Title>Tendências</Card.Title>
              <Card.Text>
                As unhas de brilho estão com tudo
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/564x/ca/97/bf/ca97bfc1708b176176e02d540757f0f7.jpg" style={{ width: "100%", height: "auto" }} />
            <Card.Body>
              <Card.Title>Como usar Pó cromado</Card.Title>
              <Card.Text>
                Mais detalhes no nosso Daily @Juju_Da_Unha_Feita
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src="https://i.pinimg.com/736x/f0/a0/97/f0a097d5295b3a1c6a711cb13a716eb4.jpg" style={{ width: "100%", height: "auto" }} />
            <Card.Body>
              <Card.Title>Cuidados 💛</Card.Title>
              <Card.Text>
                Dicas de cuidados para suas unhas
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
