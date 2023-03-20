import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
function NavBar(props){
return(
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie list</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{textDecoration:'none', margin:'0 5px',color:'white'}}>Home</Link>
            <Link to="favList" style={{textDecoration:'none',color:'white'}}>Favorite</Link>
          </Nav>
        </Container>
      </Navbar>
)
}
export default NavBar;