import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { AiOutlinePicture } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding-top: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const ContentBox = styled.div`
  width: calc(100% - 20px); // 전체 너비에서 마진을 뺀 너비 설정
  height: 100%;
  margin-left: 20px;
  padding-top: 30px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Title = styled.textarea`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 5px;
  cursor: text;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 518px;
  height: 56px;
  background: none;
  border: none;
  outline: none;
  resize: none;
  padding-top: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 56px;
  margin-right: 30px;
`;

const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  height: 56px;
`;

const OptionWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  &:hover {
    background-color: rgba(14, 59, 94, 0.5);
  }
`;

const IconDiv = styled.div`
  width: 250px;
  height: 40px;
  color: rgb(29, 155, 240);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
`;

const PublishButton = styled.div`
  width: 66px;
  height: 35px;
  background-color: rgb(29, 155, 240);
  position: right;
  border-radius: 60px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default function CreatePost({ addTweet }) {
  const [value, setValue] = useState("");
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();

  const onPostButtonClick = async () => {
    if (!value) return;
    if (value.length > 180) {
      alert("Tweets have to be shorter than 180 characters!");
      return;
    }
    setUploading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/tweets`,
        {
          // const response = await axios.post("/tweets", {
          accountId: "1",
          content: value,
        }
      );
      setUploading(false);
      alert("Posted!");
      addTweet(response.data.tweet);
      navigate("/");
      window.location.reload();
      setValue("");
    } catch (error) {
      setUploading(false);
      alert("Failed to post the tweet.");
      console.error(error);
    }
  };

  return (
    <Container>
      <ContentBox>
        <Header>
          <Avatar src="https://via.placeholder.com/40" alt="User Avatar" />
          <Title
            placeholder="What is happening?!"
            maxLength={280}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></Title>
        </Header>
        <Options>
          <OptionDiv>
            <OptionWrapper></OptionWrapper>
            <IconDiv>
              <AiOutlinePicture />
              <HiOutlineGif />
              <CiCircleList />
              <BsEmojiSmile />
              <LuCalendarClock />
              <IoLocationOutline />
            </IconDiv>
          </OptionDiv>
          <PublishButton onClick={onPostButtonClick} disabled={!value.length}>
            Post
          </PublishButton>
        </Options>
      </ContentBox>
    </Container>
  );
}
