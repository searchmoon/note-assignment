import styled from "styled-components";
import NoteList from "../noteList/NoteList";
import { useEffect, useState } from "react";

const NoteListArea = () => {
  if (localStorage.getItem("saveTextInfo")) {
    const saveTextInfo = JSON.parse(localStorage.getItem("saveTextInfo"));
  }

  const [textInfo, setTextInfo] = useState(saveTextInfo);

  useEffect(() => {
    setTextInfo(textInfo);
  }, [textInfo]);

  const dummyList = [textInfo];

  return (
    <NoteListStyle>
      {dummyList.map((item) => (
        <NoteList key={item.timestamp} item={item} />
      ))}
    </NoteListStyle>
  );
};

const NoteListStyle = styled.div`
  border-right: 1px solid #999;
`;

export default NoteListArea;
