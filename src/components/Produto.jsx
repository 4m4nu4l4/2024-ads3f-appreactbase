/*import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ produto }) => {
  return (
    <section class="py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row cols-md-3 g-3">
          <div class="card shadow-sm">
            <div class="col">
              <Card style={{ width: "18rem" }}>

                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>

                  <Card.Title>Card Title</Card.Title>

                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;*/
import React from "react";
import { Card, Button } from "react-bootstrap";
import Produtos from "../pages/Produtos";

const Produtos = ({ produto }) => {
  return (
    <Card style={{ width: "18rem" }} className="shadow-sm">
      <Card.Img variant="top" src="https://i.pinimg.com/564x/4a/bc/09/4abc09728f2ad0e65f4ff2eb1eee25d5.jpg" />
      <Card.Body>
        <Card.Title>oi</Card.Title>
        <Card.Text>oi</Card.Text>
        <Button variant="primary">Ver detalhes</Button>
      </Card.Body>
    </Card>
  );
};

export default Produtos;
