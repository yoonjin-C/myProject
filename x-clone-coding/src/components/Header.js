import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const HeaderContainer = styled.div`
  /* position:fixed; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 305px;
  height: 100%;
  padding-left: 8px;
  padding-right: 8px;
  align-items: flex-start;
  background-color: black;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
`;

const Logo = styled.h1`
  color: rgba(231, 233, 234, 1);
  text-decoration: none;
  font-size: 2rem;
`;
const NavItem = styled.div`
  color: rgba(231, 233, 234, 1);
  text-decoration: none;
  font-size: 2em;
  display: flex;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  justify-content: center;
`;
const NavItemLogo = styled.div`
  color: rgba(231, 233, 234, 1);
  font-size: 2rem;
  margin-left: 35px;
  width: 1.75rem;
  height: 1.75rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;
const NavItemText = styled.div`
  color: rgba(231, 233, 234, 1);
  text-overflow: unset;
  font-size: 20px;
  font-weight: 700px;
  white-space: nowrap;
  margin-left: 20px;
  text-align: inherit;
  line-height: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <Link to={`/`}>
            <NavItemLogo> 𝕏 </NavItemLogo>
          </Link>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <RiHome7Fill />
          </NavItemLogo>
          <Link to={`/`}>
            <NavItemText>Home</NavItemText>
          </Link>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <BiSearch />
          </NavItemLogo>
          <NavItemText>Explore</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <GoBell />
          </NavItemLogo>
          <NavItemText>Notifications</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <GoMail />
          </NavItemLogo>
          <NavItemText>Messages</NavItemText>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <FaRegUser />
          </NavItemLogo>
          <Link to={`/profile`}>
            <NavItemText>Profile</NavItemText>
          </Link>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <HiOutlineDotsCircleHorizontal />
          </NavItemLogo>
          <NavItemText>More</NavItemText>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
