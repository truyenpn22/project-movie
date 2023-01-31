import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
const HeaderComponents = () => {
    const navData = [
        { name: "Home", link: "/" },
        { name: "Movies", link: "/movies" },
        { name: "TV Series", link: "/series" },
        { name: "Search", link: "/search" },
    ];
    return (
        <header className="header">
            <Navbar bg="dark" expand="lg">
                <Container>
                <div className="nav-brand">The Movies</div>
                    <Navbar.Toggle area-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="me-aut my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            {navData.map((item) => {
                                return (
                                    <Nav key={item.name}>
                                        <Link to={item.link}>
                                            {item.name}
                                        </Link>
                                    </Nav>
                                )
                            })}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default HeaderComponents;
