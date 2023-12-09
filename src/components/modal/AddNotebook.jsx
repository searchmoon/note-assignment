import { useEffect, useState } from "react";
import styled from "styled-components";
import { GoCheckCircleFill } from "react-icons/go";
import { useSelector } from "react-redux";
// import { setNoteList } from "../../features/noteSlice";
import { v4 as uuidv4 } from "uuid";

const AddNotebook = ({ onClose, editName, editColor, isEditing }) => {
  const [id, setId] = useState(uuidv4());
  const [inputText, setInputText] = useState(editName ? editName : "");
  const [selectedColor, setSelectedColor] = useState(editColor ? editColor : "teal");
  const [disabledBtn, setDisabledBtn] = useState(true);

  const noteList = useSelector((state) => state.note.noteList);

  const coverColors = [
    "teal",
    "green",
    "yellow",
    "orange",
    "purple",
    "red",
    "gray",
    "coral",
    "blue",
    "olive",
  ];

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const handleCreateNotebook = () => {
    setInputText("");
    onClose();

    const updatedNotebookList = [...noteList, { id, name: inputText, color: selectedColor }];
    localStorage.setItem("noteList", JSON.stringify(updatedNotebookList));
  };

  const handleUpdateNotebook = () => {
    onClose();

    const updatedNotebookList = noteList.map((item) =>
      item.id === id ? { ...item, name: inputText, color: selectedColor } : item
    );

    localStorage.setItem("noteList", JSON.stringify(updatedNotebookList));
  };

  const handleColorClick = (color) => {
    setSelectedColor(color === selectedColor ? selectedColor : color);
  };

  useEffect(() => {
    setDisabledBtn(inputText === "");
  }, [inputText]);

  return (
    <AddNotebookWrap>
      <h2>Create New Notebook</h2>
      <Div>
        <span>Name</span>
        <input
          type="text"
          placeholder="Enter notebook name"
          value={inputText}
          onChange={handleChangeInput}
        />
      </Div>
      <CoverWrap>
        <span>Cover</span>
        <div className="color-wrap">
          {coverColors.map((color, idx) => (
            <div
              onClick={() => handleColorClick(color)}
              key={idx}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && (
                <GoCheckCircleFill size={22} color={"black"} opacity={0.4} />
              )}
            </div>
          ))}
        </div>
      </CoverWrap>
      <BtnWrap
        disabled={disabledBtn}
        onClick={isEditing ? handleUpdateNotebook : handleCreateNotebook}
      >
        <button disabled={disabledBtn}>{isEditing ? "Update" : "create"}</button>
      </BtnWrap>
    </AddNotebookWrap>
  );
};

const AddNotebookWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  h2 {
    font-weight: 700;
    font-size: 24px;
  }
`;

const BtnWrap = styled.div`
  width; 400px;
  align-self: flex-end;
  button {
    background-color: ${(props) => (props.disabled ? "gray" : "#127ac3")};
    border-radius: 3px;
  }
`;

const Div = styled.div`
  margin: 20px 0;
  width: 100%;
  align-items: center;
  span {
    display: inline-block;
    width: 20%;
  }
  input {
    width: 80%;
    padding: 10px;
    border-radius: 3px;
    border: none;
    outline: none;
  }
`;

const CoverWrap = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  span {
    width: 20%;
  }
  .color-wrap {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 28px;
    div {
      width: 100%;
      height: 68px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default AddNotebook;
