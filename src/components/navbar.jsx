import React from "react";
import Navbar from "react-bootstrap/Navbar";

//Stateless Functional Component(在最新版的React中新增了useState，可以直接在function component中使用local state)
//當我們在一個Component中並未使用到state，可以考慮使用function的方式來撰寫，使程式看起來更簡潔
//需注意的地方為，需使用參數時需以箭頭函式做帶入:props=>{}，無法像class的寫法直接在元素中以this.props.xxx來接收值
//也可直接如下程式中，直接帶入props中的key，ex:({ totalCounters })={}

const NavBar = ({ totalCounters }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
