import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 54px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99;
  color: white;
`;

const User = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ArrowDiv = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const NavItemLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:visited {
    color: white;
  }

  &:hover {
    color: white;
  }

  &:active {
    color: white;
  }
`;

function ProfileHeader({ userData }) {
  return (
    <ProfileHeaderDiv>
      <NavItemLink to={`/..`}>
        <ArrowDiv>
          <FaArrowLeft />
        </ArrowDiv>
      </NavItemLink>
      <User>{userData.name}</User>
    </ProfileHeaderDiv>
  );
}

export default ProfileHeader;
