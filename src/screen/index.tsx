import { Typography } from "@mui/material";
import React from "react";
import NavigationBar from "../navbar";
import { Header, HeaderText, Task } from "./style";
import { cur, prev } from "../Api/StocksHistory";

export const Screen = () => {
  console.log(cur);
  return (
    <>
      <Task>
        <Header>
          <HeaderText>
            <Typography
              fontSize={70}
              fontWeight={400}
              fontFamily="Circular Std"
            >
              {cur ? parseFloat(cur).toFixed(2) : "126.50"}
            </Typography>
            <Typography
              fontSize={24}
              fontWeight={400}
              fontFamily="Circular Std"
              color="#BDBEBF"
              mb={5}
            >
              USD
            </Typography>
          </HeaderText>
          <Typography
            color="#67BF6B"
            fontSize={18}
            fontWeight={400}
            fontFamily="Circular Std"
            mt={-4}
          >
            0.770 (0.55%)
          </Typography>
          <NavigationBar></NavigationBar>
        </Header>
      </Task>
    </>
  );
};
