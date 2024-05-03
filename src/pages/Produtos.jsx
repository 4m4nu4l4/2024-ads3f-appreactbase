import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/Produto";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    fetch(url)
      .then((resposta) => resposta.json())
      .then((data) => {
        setProdutos(data.products);
      });
  }, []);
// teste
  return (
    <Container style={{marginTop: '50px'}}>
      <Row>
        <Col>
          <h2>Produtos</h2>
        </Col>
      </Row>
      <Row>
        {produtos.slice(0, 12).map((produto, index) => (
          <Col lg={4} xs={12} key={index}>
            <Link to={`/produto/${produto.id}`}>
              <ProductCard produto={produto} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
