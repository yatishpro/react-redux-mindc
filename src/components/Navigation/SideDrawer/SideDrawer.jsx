import React from "react";
import SideNavigationItems from "../SideNavigationItems/SideNavigationItems";
import Classes from "./SideDrawer.module.scss";
import Aux from "../../../hoc/Auxs/Auxs";
import BackDrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";


const sideDrawer = props => {
    let attachedClasses = [Classes.SideDrawer, Classes.Close];
    if (props.open) {
        attachedClasses = [Classes.SideDrawer, Classes.Open];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
                <nav>
                    <div className={Classes.GraduationCap}>
                        <FontAwesomeIcon icon={faGraduationCap} color="white" size="5x"/>
                    </div>
                    <SideNavigationItems clicked={props.closed} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
