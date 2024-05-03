import React from "react";
import { Card, Button } from "react-bootstrap";

const Produtos = ({ produto }) => {
  return (
    <section className="py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{marginBottom: '10px'}}>

          <div className="col">

            <Card className="shadow-sm" style={{ width: "18rem", marginBottom: '30px' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/4a/bc/09/4abc09728f2ad0e65f4ff2eb1eee25d5.jpg" />
              <Card.Body>
                <Card.Title>Princess Nail</Card.Title>
                <Card.Text>
                  Essas são as unhas que foram usadas pela princesa Diana em toda sua vida
                </Card.Text>
                <Button variant="primary">Buy Here</Button>
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ width: "18rem", marginBottom: '30px' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/48/bd/2e/48bd2e5567e4d3464a1e5a9836a5c7d9.jpg" />
              <Card.Body>
                <Card.Title>Princess Nail</Card.Title>
                <Card.Text>
                Essas são as unhas que foram usadas pela princesa Diana em toda sua vida
                </Card.Text>
                <Button variant="primary">Buy Here</Button>
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ width: "18rem", marginBottom: '30px' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/4a/bc/09/4abc09728f2ad0e65f4ff2eb1eee25d5.jpg" />
              <Card.Body>
                <Card.Title>Princess Nail</Card.Title>
                <Card.Text>
                Essas são as unhas que foram usadas pela princesa Diana em toda sua vida
                </Card.Text>
                <Button variant="primary">Buy Here</Button>
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ width: "18rem", marginBottom: '30px' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/4a/bc/09/4abc09728f2ad0e65f4ff2eb1eee25d5.jpg" />
              <Card.Body>
                <Card.Title>Princess Nail</Card.Title>
                <Card.Text>
                Essas são as unhas que foram usadas pela princesa Diana em toda sua vida
                </Card.Text>
                <Button variant="primary">Buy Here</Button>
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ width: "18rem", marginBottom: '30px' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/4a/bc/09/4abc09728f2ad0e65f4ff2eb1eee25d5.jpg" />
              <Card.Body>
                <Card.Title>Princess Nail</Card.Title>
                <Card.Text>
                Essas são as unhas que foram usadas pela princesa Diana em toda sua vida
                </Card.Text>
                <Button variant="primary">Buy Here</Button>
              </Card.Body>
            </Card>

            <Card className="shadow-sm" style={{ width: "18rem", marginBottom: '30px'}}>
              <Card.Img variant="top" src="https://i.pinimg.com/564x/4a/bc/09/4abc09728f2ad0e65f4ff2eb1eee25d5.jpg" />
              <Card.Body>
                <Card.Title>Princess Nail</Card.Title>
                <Card.Text>
                Essas são as unhas que foram usadas pela princesa Diana em toda sua vida
                </Card.Text>
                <Button variant="primary">Buy Here</Button>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
