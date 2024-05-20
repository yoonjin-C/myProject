import { useState } from "react";
import styled from "styled-components";

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
  margin-left: 20px;
`;

function ProfileHeader({ userData }) {
  return (
    <ProfileHeaderDiv>
      <User>{userData.name}</User>
    </ProfileHeaderDiv>
  );
}

export default ProfileHeader;
