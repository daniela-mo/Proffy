import styled from "styled-components";

export const Container = styled.div`
  width: 736px;
  height: 426px;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  margin-top: 40px;
`;

export const ContentHeader = styled.div`
  width: 234px;
  padding: 0;
`;
export const Icon = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const NameTeacher = styled.p`
  margin-bottom: -7px;
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #32264d;
`;
export const Theme = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #6a6180;
`;
export const Description = styled.p`
  margin: 30px 30px 50px 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #6a6180;
`;

export const Footer = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  background: #fafafc;
  border-radius: 0px 0px 8px 8px;
  border-top: 1px solid #e6e6f0;
`;

export const Price = styled.p`
  margin-left: 30px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #9c98a6;
`;
export const Value = styled.p`
  margin-left: 20px;
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #8257e5;
`;
export const Button = styled.button`
  width: 250px;
  height: 56px;
  background: #04d361;
  border: none;
  border-radius: 8px;
  margin-left: 37%;
  font-family: "Archivo", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;
