import { FC } from "react";

import MainContainer from "components/common/MainContainer/MainContainer";
import Header from "components/HeaderSection/Header/Header";
import Main from "components/MainSection/Main/Main";
import About from "components/AboutSection/About/About";
import Electricity from "components/ElectricitySection/Electricity/Electricity";
import Cases from "components/CasesSection/Cases/Cases";
import Questions from "components/QuestionsSection/Questions/Questions";
import ContactUs from "components/ContactUsSection/ContactUs/ContactUs";
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
        <Cases />
        <Questions />
        <ContactUs />
      </MainContainer>
    </>
  );
};

export default App;
