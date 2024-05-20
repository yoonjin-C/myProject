import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";
import styled, { withTheme } from "styled-components";

const FeedHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 54px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99;
  color: white;
`;

const Container = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

function FeedHeader() {
  const [recommend, setRecommend] = useState(true);

  const handleClick = () => {
    recommend ? setRecommend(false) : setRecommend(true);
  };

  return (
    <FeedHeaderDiv>
      <Container onClick={handleClick}>
        <div
          p="15px"
          borderBottom="4px"
          borderColor={recommend ? "twitter.500" : "rgba(255, 255, 255, 0)"}
          color={recommend ? "white" : "rgba(255, 255, 255, 0.4)"}
        >
          For you
        </div>
      </Container>
      <Container onClick={handleClick}>
        <div
          p="15px"
          borderBottom="4px"
          borderColor={!recommend ? "twitter.500" : "rgba(255, 255, 255, 0)"}
          color={!recommend ? "white" : "rgba(255, 255, 255, 0.4)"}
        >
          Following
        </div>
      </Container>
    </FeedHeaderDiv>
  );
}

export default FeedHeader;
