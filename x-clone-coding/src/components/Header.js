import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiHome7Fill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { GoMail } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 294px;
  height: 100%;
  padding-left: 8px;
  padding-right: 8px;
  align-items: flex-start;
  background-color: black;
  position: fixed;
  left: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
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

const NavItemLink = styled(Link)`
  text-decoration: none;
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
  font-weight: 700;
  white-space: nowrap;
  margin-left: 20px;
  text-align: inherit;
  line-height: 24px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <NavItemLink to={`/`}>
            <NavItemLogo> 𝕏 </NavItemLogo>
          </NavItemLink>
        </NavItem>
        <NavItem>
          <NavItemLogo>
            <RiHome7Fill />
          </NavItemLogo>
          <NavItemLink to={`/`}>
            <NavItemText>Home</NavItemText>
          </NavItemLink>
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
          <NavItemLink to={`/profile`}>
            <NavItemText>Profile</NavItemText>
          </NavItemLink>
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
