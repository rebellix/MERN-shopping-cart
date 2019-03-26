import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

  class AppNavbar extends Component {
    state = {
      isOpen: false
    };

    toggle = () => {
      this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
      return (
        <div>
          <Navbar color="dark" dark>
            <Container>
              <NavbarBrand 
                href="/" 
                className="mr-auto"
              >
                ShoppingList
              </NavbarBrand>
              <NavbarToggler 
                onClick={ this.toggle } 
                className="mr-2" 
              />
            </Container>
            <Collapse isOpen={ this.state.isOpen } navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://github.com/rebellix">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      )
    }
  }

  export default AppNavbar