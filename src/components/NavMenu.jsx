import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

//Stateless Functional Component(在最新版的React中新增了useState，可以直接在function component中使用local state)
//當我們在一個Component中並未使用到state，可以考慮使用function的方式來撰寫，使程式看起來更簡潔
//需注意的地方為，需使用參數時需以箭頭函式做帶入:props=>{}，無法像class的寫法直接在元素中以this.props.xxx來接收值
//也可直接如下程式中，直接帶入props中的key，ex:({ totalCounters })={}

const NavMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">React-Function</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/TaskTracker">Task-Tracker</Nav.Link>
                    <Nav.Link href="/counters">Counter</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;
