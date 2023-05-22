import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  flex: 1;
  background-color: #8257e5;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1140px;
`;

export const Top = styled.div`
  display: flex;
  align-content: left;
  justify-content: space-between;
`;

export const Text = styled.div``;

export const Logo = styled.img``;

export const Img = styled.img``;

export const Subtitle = styled.p`
  text-align: left;
  font-family: Poppins;
  font-size: 2.25rem;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 104px;
  margin-top: 5.688rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonStudy = styled.button`
  width: 17.625rem;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #9871f5;
  font-size: 24px;
`;

export const ButtonTeaching = styled.button`
  width: 18.813rem;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 16px;
  background-color: #04d361;
  font-size: 24px;
`;

export const TextBottom = styled.p`
  display: flex;
  align-items: center;
`;

export const IconStudy = styled.img``;
export const IconClass = styled.img``;
export const IconHeart = styled.img`
  margin-left: 7px;
  margin-top: 2.5px;
`;
