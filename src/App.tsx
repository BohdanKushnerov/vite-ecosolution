import { FC } from "react";
import { ThemeProvider } from "styled-components";

import MainContainer from "common/MainContainer/MainContainer";
import Header from "sections/Header/Header";
import Main from "sections/Main/Main";
import About from "sections/About/About";
import Electricity from "sections/Electricity/Electricity";
import Cases from "sections/Cases/Cases";
import Questions from "sections/Questions/Questions";
import ContactUs from "sections/ContactUs/ContactUs";
import Footer from "sections/Footer/Footer";
import GlobalStyles from "assets/globalStyles";
import theme from "theme/theme";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainContainer>
        <Header />
        <main>
          <Main />
          <About />
          <Electricity />
          <Cases />
          <Questions />
          <ContactUs />
        </main>
        <Footer />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
