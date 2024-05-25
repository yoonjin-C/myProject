import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";
import ProfileHeader from "../Profile/ProfileHeader";
import MainProfile from "../Profile/MainProfile";

const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto scroll;
`;

function ProfilePage() {
  return (
    <ProfileContainer>
      <Header />
      <MainProfile />
    </ProfileContainer>
  );
}

export default ProfilePage;