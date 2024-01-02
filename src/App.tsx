import { FC } from "react";

import MainContainer from "@components/common/MainContainer/MainContainer";
import Header from "@components/HeaderSection/Header/Header";
import Main from "@components/MainSection/Main/Main";

const App: FC = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </div>
  );
};

export default App;
