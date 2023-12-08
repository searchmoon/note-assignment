import styled from "styled-components";
import NoteList from "../components/main/NoteList";
import TextField from "../components/main/TextField";

const TextFieldPage = () => {
  return (
    <TextFieldPageStyle>
      <NoteList />
      <TextField />
    </TextFieldPageStyle>
  );
};

const TextFieldPageStyle = styled.div`
  display: flex;
`;
export default TextFieldPage;
