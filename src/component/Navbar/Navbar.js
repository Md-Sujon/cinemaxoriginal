import React from 'react';
import  './Navbar.css';
import { Button, Container,Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import image from '../../image/cinemax.jpg'
// import { Modal } from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const HeaderNav = () => {

//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

    return (
        <div className="color">
        <Navbar className="navbarStyle" active collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home">
      <Image className="logo-image" src={image}/>
      
      
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">HOME</Nav.Link>
     
      <NavDropdown className="navDropdown" title="MOVIES" id="collasible-nav-dropdown">
        <NavDropdown.Item className="navDropdown" href="#action/3.1">ALL MOVIES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">ROMANTIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ACTION</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">THRILLER</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">DRAMATIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">COMEDY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">INSPIRATIONAL</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">PATRIOTIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">INDIE</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">FAMILY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">CHILDREN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">WOMEN CENTRIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">CLASSIC</NavDropdown.Item>
      </NavDropdown>

    
      <NavDropdown title="SERIES" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">ALL SERIES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">ROMANTIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">DRAMATIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">COMEDY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">FAMILY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">CLASSIC</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">THRILLER</NavDropdown.Item>
      </NavDropdown>
      



      <NavDropdown title="SHOWS" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">ALL NON-FICTION</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">MUSIC VIDEO</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">DOCUMENTARY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">OTHER SHOWS</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">FAMILY</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#features">REDEEM</Nav.Link>
      
    </Nav>
    <Nav>
      
    {/* <Button variant="outline-danger">LOG IN</Button>
        <Button variant="outline-danger"></Button> */}
        <Nav.Link href="#Search"><Button className="SearchButton" variant="outline-danger"><FontAwesomeIcon icon={faSearch}/></Button></Nav.Link>
      <Nav.Link className="subscribeButton" href="#SUBSCRIBE NOW"><small>SUBSCRIBE NOW</small></Nav.Link>
      <Nav.Link href="#deets"><Button className="loginButton" variant="outline-danger">LOG IN</Button></Nav.Link>
      
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
    

  </Navbar.Collapse>
  </Container>
</Navbar>

{/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}


  </div>
    );
};

export default HeaderNav;