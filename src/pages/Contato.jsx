import { Button, Form } from "react-bootstrap";

export default function Contato() {
  return (
    <div style={{padding: '5rem', width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Login</h1>
      <p>Faça seu login</p>
      <Form style={{display: 'flex', flexDirection: 'column'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
        <Form.Text className="text-muted">
           Não iremos compartilhar seu dados com ninguem.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
}
