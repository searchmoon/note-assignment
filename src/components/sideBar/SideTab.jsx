import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa6";
import styled from "styled-components";

import AddNotebook from "../modal/AddNotebook";
import { useNavigate } from "react-router-dom";
import SubNote from "./SubNote";
import Modal from "../modal/modal";

const SideTab = ({ title }) => {
  const [clickedTab, setClickedTab] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleIconStyle = {
    color: "#999",
    fontSize: 14,
  };

  const handleToggleClick = () => {
    setIsToggled((prev) => !prev);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (item) => {
    setClickedTab(item.id);
    navigate(`/notebook/${item.name}`);
  };

  const noteList = JSON.parse(localStorage.getItem("noteList"));

  return (
    <>
      <WrapToggle>
        <div className="tab-wrap">
          <div onClick={handleToggleClick}>
            {isToggled ? (
              <FaChevronDown style={toggleIconStyle} />
            ) : (
              <FaChevronRight style={toggleIconStyle} />
            )}
          </div>
          {/* 토글 이름(NOTEBOOKS) 클릭 시 notebook 들의 list 나오게 */}
          <p>{title}</p>
        </div>
        <FaPlus onClick={handleOpenModal} style={{ color: "#127ac3" }} />
      </WrapToggle>
      {isToggled &&
        noteList?.map((item) => (
          <SubNote
            onClick={() => handleTabClick(item)}
            isClicked={clickedTab === item.id}
            key={item.id}
            item={item}
          />
        ))}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddNotebook onClose={handleCloseModal} />
      </Modal>
    </>
  );
};


const WrapToggle = styled.div`
  display: flex;

  padding: 16px 8px;

  .tab-wrap {
    display: flex;
  }
`;

export default SideTab;
