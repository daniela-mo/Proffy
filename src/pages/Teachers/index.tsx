import * as Local from "./styles";
import seta from "../../assets/seta.svg";
import logo from "../../assets/Proffy.svg";
import SelecSubjects from "../../components/SelectSubjects";
import CardsTeachers from "../../components/CardsTeachers";

const Teachers = () => {
  return (
    <Local.Container>
      <Local.Content>
        <Local.Header>
          <Local.IconSeta src={seta} />
          <Local.Logo src={logo} />
        </Local.Header>

        <Local.Components>
          <Local.ContentCard>
            <Local.Label>Matéria</Local.Label>
            <SelecSubjects></SelecSubjects>
          </Local.ContentCard>
          <Local.ContentCard>
            <Local.Label>Dia da semana</Local.Label>
            <Local.SelectDays></Local.SelectDays>
          </Local.ContentCard>
          <Local.ContentCard>
            <Local.Label>Horário</Local.Label>
            <Local.InputHour></Local.InputHour>
          </Local.ContentCard>

          <CardsTeachers></CardsTeachers>
        </Local.Components>
      </Local.Content>
    </Local.Container>
  );
};

export default Teachers;
