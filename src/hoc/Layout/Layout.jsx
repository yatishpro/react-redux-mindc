import React, {Component} from "react"
import Aux from "../Auxs/Auxs.jsx"
import ToolBar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"
import {connect} from "react-redux"
import {closeSideBar, openSideBar} from "../../actions/appActions"
import "bootstrap/dist/css/bootstrap.min.css"
import {Redirect} from "react-router-dom"


class Layout extends Component {


    sideDrawerClosedHandler = () => {
        this.props.closeSideBar();
    }

    sideDrawerOpenHandler = () => {
        this.props.openSideBar();
    }


    render() {
        if (this.props.isLoggedIn) {
            return (
                <Aux>
                    <ToolBar open={this.sideDrawerOpenHandler}/>
                    <SideDrawer
                        open={this.props.showSideDrawer}
                        closed={this.sideDrawerClosedHandler}
                        // sideHandler={this.props.sideBarHandler}
                    />
                    <main className={[]}>
                                {this.props.children}
                    </main>
                </Aux>
            );
        } else {
            return (
               <Redirect to={{pathname:"/login"}}/>
            );
        }
    }
}


const mapStateToProps = state => ({
    showSideDrawer: state.app.showSideDrawer,
    isLoggedIn: state.app.isLoggedIn
});

export default connect(mapStateToProps, {closeSideBar, openSideBar})(Layout);