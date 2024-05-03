import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "./Header.css";
//import Logo from "./img/NailLogo";

export default function Header() {
  return (
      <Navbar
      style={{
        backgroundColor: "#9361CB",
        color: "#ffffff"
      }}
      expand="lg"
    >
      <Container>
      <Navbar.Brand href="https://i.pinimg.com/564x/4c/30/84/4c308417ac5a5f48d9fb2bebd7ddc658.jpg">
          <img
            src="https://i.pinimg.com/564x/4c/30/84/4c308417ac5a5f48d9fb2bebd7ddc658.jpg"
            alt="Logo" // Adicione uma descrição alternativa para acessibilidade
            //style={{ maxHeight: "50px", marginRight: "10px" }} // Ajuste o tamanho da imagem conforme necessário
            style={{
              width: "90px",
              height: "80px",
              marginRight: "10px", 
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
        <Navbar.Collapse id="minhanav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Navbar.Text as={Link} to="/" className="nav-link">
                Inicial
              </Navbar.Text>
            </li>
            <li className="nav-item">
              <Navbar.Text as={Link} to="/sobre" className="nav-link">
                Sobre
              </Navbar.Text>
            </li>
            <li className="nav-item">
              <Navbar.Text as={Link} to="/produtos" className="nav-link">
                Produtos
              </Navbar.Text>
            </li>
            <li className="nav-item">
              <Navbar.Text as={Link} to="/contato" className="nav-link">
                Login
              </Navbar.Text>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}