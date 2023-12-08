import styled from "styled-components";
import NoteList from "../noteList/NoteList";

const NoteListArea = () => {
  const dummyList = [
    { content: "note1", id: 121212 },
    { content: "note2", id: 121234 },
  ];
  return (
    <NoteListStyle>
      {dummyList.map((item) => (
        <NoteList key={item.id} item={item} />
      ))}
    </NoteListStyle>
  );
};

const NoteListStyle = styled.div`
  border-right: 1px solid #999;
`;

export default NoteListArea;
