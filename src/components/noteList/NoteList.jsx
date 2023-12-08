import styled from "styled-components";

const NoteList = ({ item }) => {
  return (
    <NoteListStyle>
      <strong>{item.content}</strong>
      
    </NoteListStyle>
  );
};

const NoteListStyle = styled.div`
  padding: 18px;
  border-bottom: 1px solid gray;
`;

export default NoteList;
