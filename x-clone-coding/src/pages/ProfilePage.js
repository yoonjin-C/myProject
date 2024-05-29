import styled from "styled-components";
import Header from "../components/Header";
import MainProfile from "../Profile/MainProfile";

const ProfileContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto scroll;
  background-color: black;
  /* padding-left: 300px; */
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
