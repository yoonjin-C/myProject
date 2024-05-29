import React from "react";
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

function Timeline({ tweets, error, onDelete, accountId }) {
  return (
    <TimelineContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.tweetId}
          tweetId={tweet.tweetId}
          accountId={accountId}
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
