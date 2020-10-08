import React, {Component} from "react";
import Layout from "../../hoc/Layout/Layout"
import {Container, Row} from "react-bootstrap";
import SimpleMcq from "../Questions/SimpleMcq/SimpleMcq";
import DescriptiveCk from "../Questions/DescriptiveCk/DescriptiveCk";
import {connect} from "react-redux"


class Home extends Component {
    render() {

        return <Layout>
                    <Container>
                        <Row>Home Page</Row>
                        {
                            this.props.questions.map((value, index) => {
                                if (value.question_type === 1) {
                                        return <SimpleMcq
                                            key={index}
                                            data={value}
                                        />
                                } else if(value.question_type === 3) {
                                    console.log(value)
                                    return <DescriptiveCk
                                        key={index}
                                        data={value}
                                    />
                                } else {

                                    return false
                                }
                            })
                        }
                    </Container>
        </Layout>
    }
}

const mapStateToProps = state => ({
    questions: state.questions.question_data
})

export default connect(mapStateToProps)(Home)