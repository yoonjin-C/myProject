import { useState } from "react";
import styled from "styled-components";

const FeedHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 54px;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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

const StyledDiv = styled.div`
  padding: 15px;
  border-bottom: ${(props) => (props.selected ? "4px" : "0")} solid
    ${(props) => (props.selected ? "twitter.500" : "rgba(255, 255, 255, 0)")};
  color: ${(props) => (props.selected ? "white" : "rgba(255, 255, 255, 0.4)")};
`;

function FeedHeader() {
  const [recommend, setRecommend] = useState(true);

  const handleClick = () => {
    setRecommend(!recommend);
  };

  return (
    <FeedHeaderDiv>
      <Container onClick={handleClick}>
        <StyledDiv selected={recommend}>For you</StyledDiv>
      </Container>
      <Container onClick={handleClick}>
        <StyledDiv selected={!recommend}>Following</StyledDiv>
      </Container>
    </FeedHeaderDiv>
  );
}

export default FeedHeader;
