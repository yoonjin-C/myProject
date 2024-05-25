import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TweetBlock = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  //padding: 15px 5px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  justify-content: center;
`;
const TweetBlock2 = styled.div`
  display: flex;
  width: 600px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: flex-start;
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
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
`;

const Text = styled.p`
  text-overflow: unset;
  color: rgb(231, 233, 234);
  line-height: 20px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
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

const ModalButton = styled.button`
  margin: 5px;
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
          <Writer>{writer}</Writer>
          <PostDate>{postDate}</PostDate>
          <DeleteBtn onClick={handleDeleteClick}>x</DeleteBtn>
        </TweetInfo>
        <ContentBlock>
          <Link to={`/tweets/${tweetId}`}>
            <Text>{content}</Text>
            {/* 사진이 들어온다면 여기 */}
          </Link>
        </ContentBlock>
        {isModalOpen && (
          <ModalOverlay>
            <ModalContent>
              <p>Delete Post?</p>
              <div>
                <ModalButton onClick={handleDeleteConfirm}>Delete</ModalButton>
                <ModalButton onClick={handleCancel}>Cancel</ModalButton>
              </div>
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
