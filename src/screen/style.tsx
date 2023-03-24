import styled from "@emotion/styled";
export const Task = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 60px;
  padding-left: 60px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 35%;
  width: 100%;
  gap: 30px;
`;
export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Body = styled.div`
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 40px;
  gap: 10px;
`;
