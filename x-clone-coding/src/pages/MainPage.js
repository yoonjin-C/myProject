import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Feed from "../components/Feed";
import TrendingBar from "../components/TrendingBar";

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto scroll;
`;

function MainPage() {
  return (
    <MainContainer>
      <Header />
      <Feed />
      {/* <Main />
      <TrendingBar /> */}
    </MainContainer>
  );
}

export default MainPage;
