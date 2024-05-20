import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaEarthAmericas, FaRegUser } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { BsListStars, BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { RiFileListLine } from "react-icons/ri";
import { CiCircleList } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { AiOutlinePicture } from "react-icons/ai";
// import PostOptionButton from "../feed_styles/feedboard_style/post_option_button";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 39, 52, 0.5);
  z-index: 999;
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

const ModalContainer = styled.div`
  background-color: black;
  width: 600px;
  min-height: 310px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  padding: 20px;
`;

const Header = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const CenteredBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Textarea = styled.textarea`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: none;
  border: none;
  outline: none;
  resize: none;
  padding-left: 50px;
  margin-top: 20px;
`;

const FileBox = styled.div`
  position: relative;
  margin-top: 10px;
  margin-left: 50px;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const IconBox = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(14, 59, 94, 0.5);
  }
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: 0.1s linear;
  }
`;

const ModifyButton = styled.div`
  position: absolute;
  bottom: 30px;
  right: 5px;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #172124;
    transition: 0.1s linear;
  }
`;

const PublishButton = styled.button`
  width: 90px;
  height: 35px;
  background-color: #1da1f2;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &:hover {
    opacity: ${(props) => (props.disabled ? 0.7 : 0.8)};
  }
`;

export default function CreatePostModal({ isOpen, onClose }) {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);
  const [attachedFileURL, setAttachedFileURL] = useState("");
  const [uploading, setUploading] = useState(false);

  const MB = 1 * 1024 * 1024;
  const user = {
    displayName: "Anonymous",
    photoURL: "https://via.placeholder.com/40",
  };

  function onAttachedFileClick() {
    if (inputRef) {
      inputRef.current.click();
    }
  }

  function onPostButtonClick() {
    if (!value && !attachedFile) return;
    if (value.length > 180) {
      alert("Tweets have to be shorter than 180 characters!");
      return;
    }
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert("Posted!");
      onModalClose();
    }, 2000);
  }

  function onAttachedFileChanged(e) {
    const limit = 5;
    if (e.target.files.length <= 0) {
      inputRef.current.value = "";
      return;
    }
    if (e.target.files.length > 1) {
      alert("We can upload only one photo, sorry😞");
      return;
    }

    if (e.target.files[0].size > MB * limit) {
      alert(
        `File size is too big, choose a different one less than ${limit}MB.`
      );
      return;
    }

    const file = e.target.files[0];
    const reader = new FileReader();

    setAttachedFile(file);
    reader.onloadend = () => {
      setAttachedFileURL(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function onAttachedFileDelete() {
    setAttachedFileURL("");
    inputRef.current.value = null;
  }

  function onModalClose() {
    onClose();
    setValue("");
    setAttachedFile(null);
    setAttachedFileURL("");
    inputRef.current.value = "";
  }

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onModalClose} />
      <ModalContainer>
        <Header>
          새 트윗 작성
          <CloseButton onClick={onModalClose}>&times;</CloseButton>
        </Header>
        <div style={{ padding: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: "20px",
            }}
          >
            <Avatar src={user.photoURL} alt="User Avatar" />
            <CenteredBox style={{ marginLeft: "5px", marginTop: "-5px" }}>
              모든사람 <MdExpandMore />
            </CenteredBox>
          </div>
          <Textarea
            placeholder="무슨 일이 일어나고 있나요?"
            maxLength={280}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {attachedFileURL && (
            <FileBox>
              <Image src={attachedFileURL} />
              <div style={{ display: "flex", marginTop: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                  }}
                >
                  <FaRegUser />
                  <span
                    style={{
                      marginLeft: "-2px",
                      marginTop: "2px",
                      fontSize: "12px",
                      textDecoration: "underline",
                    }}
                  >
                    사용자 태그하기
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgba(255, 255, 255, 0.5)",
                    marginLeft: "45px",
                    cursor: "pointer",
                  }}
                >
                  <RiFileListLine />
                  <span
                    style={{
                      marginLeft: "-2px",
                      marginTop: "2px",
                      fontSize: "12px",
                      textDecoration: "underline",
                    }}
                  >
                    설명 추가
                  </span>
                </div>
              </div>
              <DeleteIcon onClick={onAttachedFileDelete}>
                <RxCross1 />
              </DeleteIcon>
              <ModifyButton onClick={onAttachedFileClick}>수정</ModifyButton>
            </FileBox>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "40px",
              marginLeft: "-10px",
            }}
          >
            <CenteredBox>
              <FaEarthAmericas />
              <span style={{ marginLeft: "5px" }}>
                모든 사람이 답글을 달 수 있습니다
              </span>
            </CenteredBox>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onAttachedFileChanged}
            />
          </div>
          <hr style={{ margin: "10px 0", color: "rgba(255, 255, 255, 0.4)" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <div
              style={{ display: "flex", color: "#1da1f2", marginLeft: "-10px" }}
            >
              {/* <IconBox onClick={onAttachedFileClick}>
                <AiOutlinePicture />
              </IconBox>
              <PostOptionButton icon={AiOutlineFileGif} enable={false} />
              <PostOptionButton icon={BsListStars} enable={false} />
              <PostOptionButton icon={BsEmojiSmile} enable={false} />
              <PostOptionButton icon={LuCalendarClock} enable={false} />
              <PostOptionButton icon={IoLocationOutline} enable={false} /> */}
              <IconDiv>
                <AiOutlinePicture />
                <HiOutlineGif />
                <CiCircleList />
                <BsEmojiSmile />
                <LuCalendarClock />
                <IoLocationOutline />
              </IconDiv>
            </div>
            <PublishButton
              onClick={onPostButtonClick}
              disabled={!value.length && !attachedFile}
            >
              Post
            </PublishButton>
          </div>
        </div>
      </ModalContainer>
    </>
  );
}
