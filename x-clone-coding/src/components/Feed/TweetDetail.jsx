import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header";
import DetailHeader from "./DetailHeader";

const DetailContainer = styled.div`
  height: 100vh; /* 전체 높이를 채우도록 설정 */
  display: flex;
  flex-direction: row;
  overflow: auto;
  color: white;
  background-color: black;
`;

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column; /* 수직 정렬을 위해 변경 */
  flex-grow: 1;
  max-width: 600px;
  width: 100%;
  margin: 0 auto; /* 중앙 정렬 */
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
  color: white;
  padding-top: 60px;
  margin-left: 310px;
`;

const TweetBlock = styled.div`
  display: flex;
  width: 100%;
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
`;
const WriterInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-between;
`;
const ContentBlock = styled.div`
  width: 100%;
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

const TweetDetail = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/tweets/${tweetId}`)
      .then((response) => {
        setTweet(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tweet details:", error);
      });
  }, [tweetId]);

  if (!tweet) return <DetailContainer>Loading...</DetailContainer>;

  return (
    <DetailContainer>
      <Header />
      <FeedContainer>
        <DetailHeader />
        <TweetBlock>
          <TweetBlock2>
            <TweetInfo>
              <WriterInfo>
                <Writer>{tweet.writer}</Writer>
              </WriterInfo>
            </TweetInfo>
            <ContentBlock>
              <Text>{tweet.content}</Text>
              {/* 사진이 들어온다면 여기 */}
              <PostDate>{new Date(tweet.postDate).toLocaleString()}</PostDate>
            </ContentBlock>
          </TweetBlock2>
        </TweetBlock>
      </FeedContainer>
    </DetailContainer>
  );
};

export default TweetDetail;
