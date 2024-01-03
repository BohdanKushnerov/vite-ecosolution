import { FC } from "react";

import MainContainer from "components/common/MainContainer/MainContainer";
import Header from "components/HeaderSection/Header/Header";
import Main from "components/MainSection/Main/Main";
import About from "components/AboutSection/About/About";
import Electricity from "components/ElectricitySection/Electricity/Electricity";
import GlobalStyles from "assets/globalStyles";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header />
        <Main />
        <About />
        <Electricity />
      </MainContainer>
    </>
  );
};

export default App;
