import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header";

const DetailContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto scroll;
  color: white;
`;
const FeedContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-grow: 1;
  max-width: 600px;
  width: 100%;

  margin-left: 0px;
  margin-right: 0px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: rgb(47, 51, 54);
  border-style: solid;
  color: white;
`;
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

const TweetDetail = () => {
  const { tweetId } = useParams();
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    axios
      .get(`/tweets/${tweetId}`)
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
        <TweetBlock>
          <h4>{tweet.writer}</h4>
          <p>{tweet.content}</p>
          <p>{new Date(tweet.postDate).toLocaleString()}</p>
          {/* Add more tweet details as needed */}
        </TweetBlock>
      </FeedContainer>
    </DetailContainer>
  );
};

export default TweetDetail;
