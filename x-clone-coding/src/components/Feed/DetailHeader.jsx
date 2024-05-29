import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 590px;
  height: 54px;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 99;
  color: white;
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

function DetailHeader() {
  return (
    <DetailHeaderDiv>
      <NavItemLink to={`/..`}>
        <ArrowDiv>
          <FaArrowLeft />
        </ArrowDiv>
      </NavItemLink>
      <h2>Post</h2>
    </DetailHeaderDiv>
  );
}

export default DetailHeader;
