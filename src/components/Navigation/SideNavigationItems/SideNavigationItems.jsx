import React, {Component} from "react"
import {Link} from "react-router-dom"
import Classes from "./SideNavigationItems.module.scss"

class SideNavigationItems extends Component {


    render() {
        return(
            <ul className={Classes.SideNavigation}>
                <li>
                    <Link onClick={this.props.clicked} to="/">Home</Link>
                </li>
                <li>
                    <Link onClick={this.props.clicked} to="/about">About</Link>
                </li>
            </ul>
        );
    }
}

export default SideNavigationItems