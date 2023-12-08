import styled from "styled-components";

const SideBar = () => {
  return <SideBarStyle>sidebar</SideBarStyle>;
};

const SideBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 20vw;
  min-width: 250px;
  top: 0;
  left: 0;
  height: 100vh;
  border-right: 1px solid #999;
`;
export default SideBar;
