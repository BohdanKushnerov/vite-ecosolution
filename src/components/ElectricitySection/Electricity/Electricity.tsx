import { FC } from "react";

import useCounterInterval from "hooks/useCounterInterval";
import formatNumberWithCommas from "utils/formatNumberWithCommas";
import {
  ElectricityCounter,
  ElectricityCounterWrap,
  ElectricityTitle,
  KWHSpan,
} from "./Electricity.styled";

const Electricity: FC = () => {
  const counter = useCounterInterval();

  return (
    <div>
      <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
      <ElectricityCounterWrap>
        <ElectricityCounter>
          {formatNumberWithCommas(counter)}
        </ElectricityCounter>
        <KWHSpan>kWh</KWHSpan>
      </ElectricityCounterWrap>
    </div>
  );
};

export default Electricity;
