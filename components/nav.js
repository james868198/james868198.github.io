import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import {  Nav, NavItem, NavLink, Collapse,
    Navbar, NavbarToggler, NavbarBrand, DropdownMenu,DropdownItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import { FaMoon, FaSun } from 'react-icons/fa';
import Logo from './logo/logo';

const StyledNav = styled.div`
    .theme-btn {
        border-radius: 4px;
        transition: background-color 0.3s;
        &: hover {
            background-color: ${props => props.theme.bodyColor1};
        }
    }
    .navbar-toggler {
        border-color: ${props => props.theme.lineColor1};
    }
`;
const StyledNavTextBrand = styled.span`
    color: var(--text-color-1);
    &: hover {
        opacity: 0.8;
    }
`;
const StyledNavText = styled.span`
    color: var(--text-color-2);
    &: hover {
        opacity: 0.8;
    }
`;

function MyNav({prefix, switchTheme, theme}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    function toggleNav() {
        setIsNavOpen(!isNavOpen)
    }
    return (
        <StyledNav>
            <Navbar light expand="md">
                <NavbarBrand href={prefix}><StyledNavTextBrand><Logo theme={theme.name}/></StyledNavTextBrand></NavbarBrand>
                <NavbarToggler onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem >
                            <Link href={"/#about"}>
                                <NavLink><StyledNavText>About</StyledNavText></NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href={"/#work"}>
                                <NavLink><StyledNavText>Experience</StyledNavText></NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href={"/#project"}>
                                <NavLink><StyledNavText>Project</StyledNavText></NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href={"/#contact"}>
                                <NavLink><StyledNavText>Contact</StyledNavText></NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                    <UncontrolledDropdown nav inNavbar className="d-flex theme-btn">
                        <DropdownToggle nav caret>
                            {(theme.name === 'light') ? <FaSun /> : <FaMoon />}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={() => switchTheme('light')} >
                                <FaSun /> Light
                            </DropdownItem>
                            <DropdownItem onClick={() => switchTheme('dark')}>
                                <FaMoon /> Dark
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse> 
            </Navbar>
        </StyledNav>
    )
    
}

export default MyNav;