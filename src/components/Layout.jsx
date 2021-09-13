import React, { Component } from 'react';
// import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
//import Navbars from "./subcomponent/Navbar";

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavMenu />
                {/* <Navbars /> */}
                {/* <Container> */}
                <div className="back-ground-color">{this.props.children}</div>
                {/* </Container> */}
            </div>
        );
    }
}
