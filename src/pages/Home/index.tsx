import * as Local from "./styles";
import logo from "../../assets/Proffy.svg";
import img from "../../assets/Ilustra.png";
import study from "../../assets/Estudar.svg";
import classroom from "../../assets/Aula.svg";
import heart from "../../assets/heart.svg";

const Home = () => {
  return (
    <Local.Container>
      <Local.Content>
        <Local.Top>
          <Local.Text>
            <Local.Logo src={logo} />
            <Local.Subtitle>Sua plaforma de estudos online.</Local.Subtitle>
          </Local.Text>
          <Local.Img src={img} />
        </Local.Top>

        <Local.Bottom>
          <Local.Buttons>
            <Local.ButtonStudy>
              <Local.IconStudy src={study} />
              Estudar
            </Local.ButtonStudy>

            <Local.ButtonTeaching>
              <Local.IconStudy src={classroom} />
              Dar aulas
            </Local.ButtonTeaching>
          </Local.Buttons>
          <Local.TextBottom>
            Total de 285 conexões já realizadas
            <Local.IconHeart src={heart} />
          </Local.TextBottom>
        </Local.Bottom>
      </Local.Content>
    </Local.Container>
  );
};

export default Home;
