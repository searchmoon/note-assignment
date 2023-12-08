import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NewNote = () => {
  const navigate = useNavigate();
  const handleMoveToTextFieldPage = () => {
    navigate("/textFieldPage");
  };

  return (
    <NewNoteStyle>
      <div></div>
      <p>Have a thought to jot down? Tap on the button below.</p>
      <button onClick={handleMoveToTextFieldPage}>New Note</button>
    </NewNoteStyle>
  );
};

const NewNoteStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100px;
    height: 125px;
    border-radius: 10px;
    background-color: blue;
    margin-bottom: 30px;
  }
  p {
    color: lightgray;
  }
  button {
    color: #44a4f2;
  }
`;

export default NewNote;
