import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex: 1;
  background-color: #e5e5e5;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background-color: #e5e5e5;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  height: 368px;
  background: #8257e5;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const IconSeta = styled.img`
  margin-top: 30px;
  margin-left: 90px;
`;
export const Logo = styled.img`
  width: 46px;
  margin-top: 30px;
  margin-right: 90px;
`;
export const Components = styled.div`
  width: 737px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -55px;
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #d4c2ff;
`;

export const SelectDays = styled.select`
  width: 235px;
  height: 56px;
  margin: 0 7px;
  padding: 0px 8px;
  border-radius: 8px;
  background: #fafafc;
  color: #6a6180;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  box-shadow: 0 0 0 0;
  outline: 0;
`;

export const InputHour = styled.input`
  width: 235px;
  height: 56px;
  padding: 0px 8px;
  background: #fafafc;
  color: #6a6180;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  box-shadow: 0 0 0 0;
  outline: 0;
`;
