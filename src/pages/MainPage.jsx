import styled from "styled-components";
// import NewNote from "../components/main/NewNote";
import TextEditor from "../components/textEditor/TextEditor";

const MainPage = () => {
  return (
    <MainPageStyle>
      {/* 리스트 목록 볼수있는곳 리스트가 있다면...!*/}
      {/* new note 하는 곳 */}
      {/* <NewNote /> */}
      <TextEditor />

      {/* new note, note가 있다면, note list 보여주는곳 */}
    </MainPageStyle>
  );
};

const MainPageStyle = styled.div`
  display: flex;
  align-items: center;
`;

export default MainPage;
