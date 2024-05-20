import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Tweet from "./Tweet";

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const ErrorMessage = styled.div`
  color: white;
  font-weight: bold;
`;

function Timeline({ tweets, error, onDelete }) {
  //   const [tweets, setTweets] = useState([]);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     axios
  //       .get("/tweets")
  //       .then((response) => {
  //         setTweets(response.data.tweets);
  //       })
  //       .catch((error) => {
  //         setError(error.message);
  //       });
  //   }, []);

  return (
    <TimelineContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.tweetId}
          tweetId={tweet.tweetId}
          writer={tweet.writer}
          content={tweet.content}
          postDate={new Date(tweet.postDate).toLocaleString()}
          onDelete={onDelete}
        />
      ))}
    </TimelineContainer>
  );
}

export default Timeline;
