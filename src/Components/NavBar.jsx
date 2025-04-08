import { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import AuthService from "../Services/AuthService";

const NavBar = () => {
    const navigate = useNavigate();
    const { isLoggedIn, user, setIsLoggedIn } = useContext(AuthContext);

    return <>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid className="d-flex justify-content-between">
                <Navbar.Brand onClick={() => { navigate("/") }}>Flechette</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate("/login") }}>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {isLoggedIn ? <>
                        <Nav.Link onClick={() => { navigate("/account") }}>{user && user.pseudo}</Nav.Link>
                        <Button variant="outline-danger" onClick={() => {setIsLoggedIn(false); AuthService.logout()}}>Déconnexion</Button>
                         {/* <Nav.Link onClick={() => { navigate("/account") }}>{user?.pseudo}</Nav.Link> */}
                        </>: <>
                            <Nav.Link onClick={() => { navigate("/login") }}>Login</Nav.Link>
                            <Nav.Link onClick={() => { navigate("/register") }}>Register</Nav.Link>
                        </>}
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default NavBar;