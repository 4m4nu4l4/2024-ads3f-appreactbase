import { Container } from "react-bootstrap";
import Album from "../components/Album";

export default function Inicial() {
  return (
    <Container>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Hi Giiirl 💅🏻</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>Bem vinda ao nosso site para as viciadas em pintar a unha em casa!</p>
        <Album
          title="Album maravilhoso"
          text="Descrição maravilhosa do nosso álbum"
          //img="https://picsum.photos/300/400"
        />
      </div>
    </Container>
  );
}
