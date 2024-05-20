import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FeedHeader from "./Feed/FeedHeader";
import CreatePost from "./Feed/CreatePost";
import Timeline from "./Feed/Timeline";
import axios from "axios";

const FeedContainer = styled.div`
  display: block;
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
`;

const Feed = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/tweets")
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

  return (
    <FeedContainer>
      <FeedHeader />
      <CreatePost addTweet={addTweet} />
      <Timeline tweets={tweets} error={error} />
    </FeedContainer>
  );
};

export default Feed;
