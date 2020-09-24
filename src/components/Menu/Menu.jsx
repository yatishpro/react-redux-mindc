import React from "react";
import menuIcon from "../../assets/images/menu-icon.svg";
import Classes from "./Menu.module.scss";

const menu = props => {
    return(
        <div className={Classes.Menu} onClick={props.clicked}>
            <img src={menuIcon} alt="" />
        </div>
    );
}

export default menu;