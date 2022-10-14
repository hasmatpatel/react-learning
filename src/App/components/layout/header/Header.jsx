import React from 'react'
import Container from 'react-bootstrap/Container';
import { Outlet, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../assets/images/logo.svg";
import styled from 'styled-components';

const MainHeader = styled.header`
  min-height: 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: #fafafa;
`;

const MainBody = styled.div`
  padding: 20px 0;
  min-height: calc(100vh - 127px);
`;

const Header = () => {
  return (
    <>
      <MainHeader className="header">
        <Container>
          <Navbar expand="lg">
            <div className="logo-div">
              <Navbar.Brand as={NavLink} to="/Home">
                <img src={Logo} className="img-fluid" loading="lazy" />
              </Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/About">About</Nav.Link>
                <Nav.Link as={NavLink} to="/HowItWorks">How It Works</Nav.Link>
                <Nav.Link as={NavLink} to="/ContactUs">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>
        </Container>
      </MainHeader>
      
      <MainBody className="main-area">
        <Outlet />
      </MainBody>
    </>
  )
}

export default Header;