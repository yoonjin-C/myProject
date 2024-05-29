import "./App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed";
import TweetDetail from "./components/Feed/TweetDetail";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <>
      <body>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tweets/:tweetId" element={<TweetDetail />} />
        </Routes>
      </body>
    </>
  );
}

export default App;
