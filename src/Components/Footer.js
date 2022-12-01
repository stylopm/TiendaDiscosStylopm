import Nav from 'react-bootstrap/Nav';

const Footer = () => {
    return (
        <Nav  className="justify-content-center" variant="dark">
          <Nav.Item >
            <Nav.Link href="/">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      );
}
export default Footer;