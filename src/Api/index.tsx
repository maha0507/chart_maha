import {
  IgrFinancialChart,
  IgrFinancialChartModule,
} from "igniteui-react-charts";
import StocksHistory from "./StocksHistory";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "./index.css";
export const Button = styled.button`
  font-family: "Circular Std";
  font-weight: 400;
  font-size: 18px;
  color: #6f7177;
  background: white;
  border: none;
`;
IgrFinancialChartModule.register();
const FinancialChartMultipleData = () => {
  const [activeButton, setActiveButton] = useState("1d");

  const [data, setData] = useState([{}]);
  const [dataCopy, setDataCopy] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const stocks = await StocksHistory.getStockData();
      setData(stocks);
      setDataCopy(stocks);
    };
    fetchData();
  }, []);
  console.log(data);
  function getRequiredData(value: number) {
    setData(dataCopy.slice(-1 * value));
  }
  return (
    <div className="container sample">
      <div className="container">
        <div className="buttons">
          <Button
            onClick={() => {
              getRequiredData(23);
              setActiveButton("ld");
            }}
            className={activeButton === "ld" ? "activebutton" : ""}
          >
            1d
          </Button>
          <Button
            onClick={() => {
              getRequiredData(69);
              setActiveButton("3d");
            }}
            className={activeButton === "3d" ? "activebutton" : ""}
          >
            3d
          </Button>
          <Button
            onClick={() => {
              getRequiredData(161);
              setActiveButton("1w");
            }}
            className={activeButton === "1w" ? "activebutton" : ""}
          >
            1w
          </Button>
          <Button
            onClick={() => {
              getRequiredData(744);
              setActiveButton("1m");
            }}
            className={activeButton === "1m" ? "activebutton" : ""}
          >
            1m
          </Button>
          <Button
            onClick={() => {
              getRequiredData(2000);
              setActiveButton("6m");
            }}
            className={activeButton === "6m" ? "activebutton" : ""}
          >
            6m
          </Button>
          <Button
            onClick={() => {
              getRequiredData(2500);
              setActiveButton("ly");
            }}
            className={activeButton === "ly" ? "activebutton" : ""}
          >
            1y
          </Button>
          <Button
            onClick={() => {
              getRequiredData(3200);
              setActiveButton("max");
            }}
            className={activeButton === "max" ? "activebutton" : ""}
          >
            max
          </Button>
        </div>
        <IgrFinancialChart
          width="90%"
          height="300px"
          chartType="Line"
          thickness={2}
          volumeType={"column"}
          volumeOutlines={"#e7e8ec"}
          volumeBrushes={"#e7e8ec"}
          dataSource={data}
          zoomSliderType={"none"}
          toolTipType={"none"}
          xAxisLabelTextColor={"transparent"}
          yAxisLabelTextColor={"transparent"}
          brushes="rgba(75, 64, 238, 1) "
          xAxisStroke={"transparent"}
          yAxisMajorStroke={"transparent"}
          xAxisMajorStroke="#e7e8ec"
          isToolbarVisible="true"
          crosshairsAnnotationYAxisBackground="black"
          crosshairsAnnotationXAxisBackground="transparent"
          crosshairsAnnotationXAxisTextColor="transparent"
          crosshairsLineThickness={2}
        />
      </div>
    </div>
  );
};
export default FinancialChartMultipleData;
