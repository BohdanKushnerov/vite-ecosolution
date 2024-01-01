import { FC } from "react";

import MainContainer from "@components/common/MainContainer/MainContainer";
import Header from "@components/HeaderSection/Header/Header";

const App: FC = () => {
  return (
    <div>
      <MainContainer>
        <Header />
      </MainContainer>
    </div>
  );
};

export default App;
