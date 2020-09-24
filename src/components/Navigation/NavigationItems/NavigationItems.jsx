import React, {Component} from "react";
import Classes from "./NavigationItems.module.scss";
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {logoutAsStudent} from "../../../actions/appActions";


class navigationItems extends Component {

    logOutUser(event) {
        this.props.logoutAsStudent();

    }

    render() {
        return (
            <ul className={Classes.NavigationItems}>
                <li>
                    <FontAwesomeIcon  icon={faUser} color="white" size="1x" />
                    <span>  Wellcome Yatish S</span>
                </li>
                <Link onClick={ event => this.logOutUser(event) } to="/login">
                    <FontAwesomeIcon  icon={faSignOutAlt} color="white" size="2x" />
                </Link>
                {/*<NavigationItem link="/">*/}
                {/* <FontAwesomeIcon  icon={faSignOutAlt} color="white" size="2x" />*/}
                {/*</NavigationItem>*/}
            </ul>
        );
    }


}

const mapStateToProps = state => ({
    isLoggedIn: state.app.isLoggedIn
})

export default connect(mapStateToProps, {logoutAsStudent})(navigationItems);