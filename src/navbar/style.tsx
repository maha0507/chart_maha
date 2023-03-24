import styled from "@emotion/styled";

export const Navigation = styled.div`
  .li {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 20px;
    font-family: "Circular Std";
    font-style: normal;
    font-weight: 400;
    color: #6f7177;
    border-bottom: 1px solid #eff1f3;
  }
  .active {
    border-bottom: 3px solid #4b40ee;
    font-weight: 400;
    font-size: 18px;
    color: #1a243a;
  }
  .activebutton {
    background: #4b40ee;
    border-radius: 5px;
    font-family: "Circular Std";
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #ffffff;
  }
`;
