import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TweetBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 5px 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const TweetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const Poster = styled.img`
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 250px;
  height: 390px;
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
  background: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalButton = styled.button`
  margin: 5px;
`;

function Tweet({ tweetId, writer, content, postDate, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    onDelete(tweetId);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <TweetBlock>
      <TweetInfo>
        <Writer>{writer}</Writer>
        <PostDate>{postDate}</PostDate>
        <DeleteBtn onClick={handleDeleteClick}>x</DeleteBtn>
      </TweetInfo>
      <ContentBlock>
        <Text>{content}</Text>
        {/* 사진이 들어온다면 여기 */}
      </ContentBlock>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <p>정말 삭제하시겠습니까?</p>
            <div>
              <ModalButton onClick={handleDeleteConfirm}>삭제</ModalButton>
              <ModalButton onClick={handleCancel}>취소</ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </TweetBlock>
  );
}

Tweet.propTypes = {
  tweetId: PropTypes.number.isRequired,
  writer: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Tweet;
