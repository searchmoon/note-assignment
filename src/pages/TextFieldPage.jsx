import styled from "styled-components";
import NoteListArea from "../components/main/NoteListArea";
import TextEditor from "../components/textEditor/TextEditor";

const TextFieldPage = () => {
  return (
    <TextFieldPageStyle>
      <NoteListArea />
      <TextEditor />
    </TextFieldPageStyle>
  );
};

const TextFieldPageStyle = styled.div`
  display: flex;
`;
export default TextFieldPage;
