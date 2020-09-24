import React, {Component} from "react";
import Layout from "../../hoc/Layout/Layout";
import {Container, Row} from "react-bootstrap";

class About extends Component{
    render() {
        return (
            <Layout>
                <Container>
                    <Row>
                        About Page
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default About