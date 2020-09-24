import React, {Component} from "react";
import Classes from "./SchoolName.module.scss";

class schoolName extends Component {
    render() {
        return(
            <div className={Classes.SchoolName}>
                Sacred Heart Higner Secondary School
            </div>
        );
    }
}

export default schoolName;