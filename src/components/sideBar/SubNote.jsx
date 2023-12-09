import styled from "styled-components";
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import AddNotebook from "../modal/AddNotebook";
import { useParams } from "react-router-dom";
import Modal from "../modal/modal";

const SubNote = ({ item }) => {
  const { title } = useParams();
  console.log(title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, color, id } = item;
  console.log(item);

  const handleEditNotebook = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteNotebook = (item) => {
    console.log(item);
  };

  return (
    <SubNoteWrap color={color}>
      <div className="title-box">
        <div className="color-box"></div>
        <span>{name}</span>
      </div>
      <div className="icon-box">
        <RiEditLine onClick={handleEditNotebook} />
        <RiDeleteBin6Line onClick={() => handleDeleteNotebook(item)} />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AddNotebook
          onClose={handleCloseModal}
          editName={name}
          editColor={color}
          isEditing={true}
        />
      </Modal>
    </SubNoteWrap>
  );
};

const SubNoteWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  padding: 4px 14px;
  cursor: pointer;
  background-color: ${(props) => (props.isClicked ? "rgba(255, 255, 255, 0.1)" : "transparent")};
  .title-box {
    display: flex;
    align-items: center;
    .color-box {
      width: 20px;
      height: 26px;
      border-radius: 3px;
      background-color: ${(props) => props.color};
      margin-right: 10px;
    }
  }
  .icon-box {
    display: none;
  }

  &:hover {
    background-color: ${(props) => (props.isClicked ? "rgba(255, 255, 255, 0.1)" : "transparent")};
    .icon-box {
      display: flex;
      gap: 8px;
    }
  }
`;

export default SubNote;
