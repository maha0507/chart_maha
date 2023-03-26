import { Typography } from "@mui/material";
import { Body, Buttons, Graph } from "./style";
import FinancialChartMultipleData from "../Api";
import { PlusCircle, Maximize2 } from "react-feather";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const GraphScreen = () => {
  const handle = useFullScreenHandle();

  return (
    <>
      <Body>
        <Buttons>
          <Maximize2 color="#6F7177" onClick={handle.enter} />
          <Typography
            fontSize={18}
            fontWeight={400}
            fontFamily="Circular Std"
            color="#6F7177"
            mr={4}
          >
            Fullscreen
          </Typography>
          <PlusCircle color="#6F7177" />
          <Typography
            fontSize={18}
            fontWeight={400}
            fontFamily="Circular Std"
            color="#6F7177"
          >
            Compare
          </Typography>
          <div className=""></div>
        </Buttons>
        <FullScreen handle={handle}>
          <Graph>
            <FinancialChartMultipleData />
          </Graph>
        </FullScreen>
      </Body>
    </>
  );
};
