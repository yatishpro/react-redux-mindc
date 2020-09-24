import React from "react";
import Classes from "./Toolbar.module.scss";
import Navigation from "../NavigationItems/NavigationItems";
import Menu from "../../Menu/Menu";
import SchoolName from "../SchoolName/SchoolName";

const toolbar = props => (
    <header className={Classes.Toolbar}>
        <Menu clicked={props.open} />
        <SchoolName />
        <nav className={Classes.DesktopOnly}>
            <Navigation />
        </nav>
    </header>
);

export default toolbar;