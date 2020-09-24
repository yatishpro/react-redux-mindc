import React, {Component} from "react";
import Layout from "../../hoc/Layout/Layout"
import {Container, Row} from "react-bootstrap";

class Home extends Component {
    render() {
        return <Layout>
                    <Container>
                        <Row>Home Page</Row>
                    </Container>
        </Layout>
    }
}

export default Home