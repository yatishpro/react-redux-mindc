import React from "react";
import Classes from "./NavigationItem.module.scss";

const navigationItem = props => {
    return (
        <li className={Classes.NavigationItem}>
            <a href={props.link} className={props.active ? Classes.active : null}>
                {props.children}
            </a>
        </li>
    );
}

export default navigationItem;