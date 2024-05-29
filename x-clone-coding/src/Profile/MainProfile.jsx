import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ProfileHeader from "./ProfileHeader";
import PropTypes from "prop-types";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 600px;
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
  color: white;
  background-color: black;
  margin-left: 310px;
`;

const UserInfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-top: 60px;
`;

const BackProfile = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: 180px;
  left: 330px;
  border: 3px solid #323545;
`;

const SetUp = styled.div`
  width: 140px;
  height: 35px;
  border-radius: 20px;
  position: absolute;
  top: 270px;
  left: 735px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border: 0.5px solid white;
  cursor: pointer;
`;

const UserInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 10px;
`;

const NameText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const IdText = styled.div`
  color: rgb(113, 118, 123);
  font-size: 16px;
`;
const BioText = styled.div`
  font-size: 18px;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const DateText = styled.div`
  color: rgb(113, 118, 123);
  font-size: 16px;
  margin-left: 10px;
`;
const MainProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const accountId = "1"; // 임시 계정 ID

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/accounts/${accountId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        setError(
          error.response
            ? error.response.data
            : { message: "Error fetching user data" }
        );
      });
  }, [accountId]);

  return (
    <ProfileContainer>
      {userData ? <ProfileHeader userData={userData} /> : <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      <BackProfile />
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsaaxBva4vLp-CNLiK7abriT0BpDv0NijFQ&s"
        alt="User Avatar"
      />
      <SetUp>Set up profile </SetUp>
      {userData && (
        <UserInfoBlock>
          <UserInfo>
            <NameText>{userData.name}</NameText>
            <IdText>{userData.nickname}</IdText>
          </UserInfo>
          <BioText>{userData.bio}</BioText>
          <DateText>
            Joined{" "}
            {new Date(userData.joinDate).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </DateText>
        </UserInfoBlock>
      )}
    </ProfileContainer>
  );
};

MainProfile.propTypes = {
  userData: PropTypes.shape({
    accountId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string,
    joinDate: PropTypes.string.isRequired,
  }),
};

export default MainProfile;
