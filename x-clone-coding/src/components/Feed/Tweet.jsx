import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TweetBlock = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: center;
`;

const TweetBlock2 = styled.div`
  display: flex;
  width: 580px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px;
`;

const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 580px;
  justify-content: space-between;
`;
const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
`;

const Writer = styled.div`
  color: rgb(231, 233, 234);
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap;
  align-items: center;
`;

const PostDate = styled.div`
  color: rgb(113, 118, 123);
  font-size: 15px;
  white-space: nowrap;
  align-items: center;
  margin-left: 20px;
`;

const ContentBlock = styled.div`
  width: 580px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Text = styled.p`
  text-overflow: unset;
  color: rgb(231, 233, 234);
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
`;

const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  color: white;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: black;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeleteInfo = styled.div`
  color: #7f8082;
  margin-bottom: 15px;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModalDelButton = styled.button`
  margin: 5px;
  width: 250px;
  height: 45px;
  background-color: red;
  color: white;
  border: 0.5px solid red;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
`;
const ModalCancelButton = styled.button`
  margin: 5px;
  width: 250px;
  height: 45px;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  border: 0.5px solid white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
`;

function Tweet({ tweetId, writer, content, postDate, onDelete, accountId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(tweetId, accountId);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <TweetBlock>
      <TweetBlock2>
        <TweetInfo>
          <WriterInfo>
            <Writer>{writer}</Writer>
            <PostDate>{postDate}</PostDate>
          </WriterInfo>
          <DeleteBtn onClick={handleDeleteClick}>x</DeleteBtn>
        </TweetInfo>
        <ContentBlock>
          <StyledLink to={`/tweets/${tweetId}`}>
            <Text>{content}</Text>
            {/* 사진이 들어온다면 여기 */}
          </StyledLink>
        </ContentBlock>
        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <p>Delete Post?</p>
              <DeleteInfo>
                This can’t be undone and it will be
                <br />
                removed from your profile, the <br />
                timeline of any accounts that follow <br />
                you, and from search results.
              </DeleteInfo>
              <BtnDiv>
                <ModalDelButton onClick={handleDeleteConfirm}>
                  Delete
                </ModalDelButton>
                <ModalCancelButton onClick={handleCancel}>
                  Cancel
                </ModalCancelButton>
              </BtnDiv>
            </ModalContent>
          </ModalOverlay>
        )}
      </TweetBlock2>
    </TweetBlock>
  );
}

Tweet.propTypes = {
  tweetId: PropTypes.number.isRequired,
  writer: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  accountId: PropTypes.string.isRequired,
};

export default Tweet;
