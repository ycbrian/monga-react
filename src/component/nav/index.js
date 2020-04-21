import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="light" light expand="lg" className="mb-4">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="nav-fill w-100">
          <NavItem>
            <Link className="nav-link" to="/">
              巷弄底底弄
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/workshop">
              手藝轉乾坤
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/exhibition">
              來艋舺瞧事情
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/hulu">
              冒險逮丸郎
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/organizer">
              主辦引流
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/traffic">
              交通資訊
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Index;
