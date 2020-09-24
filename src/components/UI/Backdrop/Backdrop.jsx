import React from "react";
import Classes from "./Backdrop.module.scss";

const backdrop = props => {
    return props.show ? (
        <div className={Classes.Backdrop} onClick={props.clicked} />
    ) : null;
};

export default backdrop;
