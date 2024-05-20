import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import mockData from "../mockData.json";
import ProfileHeader from "./ProfileHeader";
import PropTypes from "prop-types";

const ProfileContainer = styled.div`
  display: block;
  flex-grow: 1;
  max-width: 600px;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: rgb(47, 51, 54);
  border-style: solid;
`;

const UserInfoBlock = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MainProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const accountId = 1; // 임시 계정 ID

  useEffect(() => {
    // API 이용시
    // axios
    //   .get(`/accounts/${accountId}`)
    //   .then((response) => {
    //     setUserData(response.data);
    //   })
    //   .catch((error) => {
    //     setError(
    //       error.response ? error.response.data : "Error fetching user data"
    //     );
    //   });

    const user = mockData.users.find((item) => item.accountId === accountId); // 임시로 mockData 사용. 삭제 예정
    if (user) {
      setUserData(user);
    } else {
      setError({ message: "User not found" });
    }
  }, [accountId]);

  return (
    <ProfileContainer>
      {userData ? <ProfileHeader userData={userData} /> : <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {userData && (
        <UserInfoBlock>
          <h4>{userData.name}</h4>
          <p>{userData.nickname}</p>
          <p>{userData.email}</p>
          <p>{userData.bio}</p>
          <p>{new Date(userData.joinDate).toLocaleString()}</p>
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
