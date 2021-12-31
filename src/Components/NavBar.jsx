import React from 'react'
import { Form,FormControl,Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css"

function NavBar() {
    return (
        <div>

            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">TravelInn</Navbar.Brand>
                    <Nav className="justify-content-center m-auto">
                        <Nav.Link as={Link} to="/">SignIn</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                     
                    </Nav>
                    <Form className="d-flex">
                           
                            <Button variant="danger">Logout</Button>
                        </Form>
                </Container>
            </Navbar>



        </div>
    )
}

export default NavBar;
