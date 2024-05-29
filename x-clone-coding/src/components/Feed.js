import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedHeader from "./Feed/FeedHeader";
import CreatePost from "./Feed/CreatePost";
import Timeline from "./Feed/Timeline";
import axios from "axios";
import mockData from "../mockData.json";

const FeedContainer = styled.div`
  display: block;
  flex-grow: 1;
  max-width: 600px;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: rgb(47, 51, 54);
  border-style: solid;
`;

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const accountId = "1"; //현재 사용자 ID

  useEffect(() => {
    axios
      .get("https://api.efubx.o-r.kr/tweets")
      // .get("/tweets")
      .then((response) => {
        setTweets(response.data.tweets);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  const deleteTweet = (tweetId, accountId) => {
    axios
      .delete(
        `https://api.efubx.o-r.kr/tweets/${tweetId}?accountId=${accountId}`
      )
      .then(() => {
        setTweets(tweets.filter((tweet) => tweet.tweetId !== tweetId));
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          alert("삭제 권한이 없는 사용자입니다.");
        } else {
          console.error("Failed to delete tweet:", error);
          alert("Failed to delete the tweet.");
        }
      });
  };

  return (
    <FeedContainer>
      <FeedHeader />
      <CreatePost addTweet={addTweet} />
      <Timeline
        tweets={tweets}
        error={error}
        onDelete={deleteTweet}
        accountId={accountId}
      />
    </FeedContainer>
  );
};

export default Feed;
