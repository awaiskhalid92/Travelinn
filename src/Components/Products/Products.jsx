import React from 'react'
import axios from "axios";
import SingleProduct from './SingleProduct';
import { Container, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../../style.css"

const Products = () => {
    const [products, setProducts] = React.useState([]);

    const getData = () => {
        axios.get("https://usman-recipes.herokuapp.com/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(function () {
        console.log("Sending Ajax Call");
        getData();
    }, []);


    return (
        <div>
            <Container fluid className="products ">
                <Row className="row">
                    <Col className="pro-col col-12 col-6 d-flex justify-content-center">
                        <h3>Travel Inn</h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="product-menu">
                <Row>
                    <Col xs={3} className="pro-menu-col ">
                        <Button as={Link} to="/products/addnewproduct" variant="outline-danger" className="add-pr mx-2">Product+</Button>{' '}

                    </Col>

                </Row>
            </Container>
            
            {products.map((p, index) => (
                <SingleProduct key={index} product={p} onDelete={getData} />
            ))}
        </div>
    )
}

export default Products
