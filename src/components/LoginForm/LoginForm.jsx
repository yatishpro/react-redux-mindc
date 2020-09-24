import React, {Component} from "react"
import Classes from "./LoginForm.module.scss"
import {Button, Form} from "react-bootstrap"
import {connect} from "react-redux"
import { logginAsStudent } from "../../actions/appActions"
import {Redirect} from "react-router-dom"

class LoginForm extends Component {

    state = {
        username: 'dfs',
        password: 'asfd'
    }

    updateInputValue(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.logginAsStudent(this.state);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <div className={Classes.LoginForm}>
                    <h2>Login To Your Account</h2>
                    <p>Please enter your username and password to log in</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control
                                value={this.state.username}
                                name="username"
                                onChange={event => this.updateInputValue(event)}
                                type="text"
                                placeholder="User name"
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control
                                value={this.state.password}
                                name="password"
                                onChange={event => this.updateInputValue(event)}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Button
                            className={Classes.Button}
                            onClick={event => this.onFormSubmit(event)}
                            variant="primary"
                            type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            )
        } else {
            return (
                <Redirect to={{pathname:"/"}} />
                    )
        }
    }
}
const mapStateToProps = state => ({
    isLoggedIn: state.app.isLoggedIn
})

export default connect(mapStateToProps, { logginAsStudent })(LoginForm)