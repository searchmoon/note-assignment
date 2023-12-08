import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import styled from "styled-components";
import MainPage from "./pages/MainPage";
import SideBar from "./components/sideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppContainer>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
`;
export default App;
