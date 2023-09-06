import { Container, Row, Col, Navbar } from "react-bootstrap";
function TestField() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
        <Row>
            <Col>1 of 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum pariatur illum ea iusto eligendi, cupiditate, quas, hic voluptates esse sapiente quos! Esse reprehenderit nesciunt at, odit iure quas laboriosam commodi.</Col>
            <Col>2 of 2</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>
    </>
  );
}
export default TestField;
