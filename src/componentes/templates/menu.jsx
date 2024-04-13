import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Menu() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/inscricao">Inscrição</Nav.Link>
            <Nav.Link href="/excluir">Cancelar inscrição</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}