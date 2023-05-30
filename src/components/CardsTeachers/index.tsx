import * as Local from "./styles";
import diego from "../../assets/Diego.png";

const CardsTeachers = () => {
  return (
    <Local.Container>
      <Local.Content>
        <Local.Header>
          <Local.Icon src={diego} />
          <Local.ContentHeader>
            <Local.NameTeacher>Diego</Local.NameTeacher>
            <Local.Theme>Química</Local.Theme>
          </Local.ContentHeader>
        </Local.Header>

        <Local.Description>
          Instrutor de Educação Física para iniciantes, minha missão de vida é
          levar saúde e contribuir para o crescimento de quem se interessar.
          <br />
          <br />
          Comecei a minha jornada profissional em 2001, quando meu pai me deu
          dois alteres de 32kg com a seguinte condição: "Aprenda a fazer
          dinheiro com isso!"
        </Local.Description>
        <Local.Footer>
          <Local.Price>Preço/hora</Local.Price>
          <Local.Value>R$ 40,00</Local.Value>
          <Local.Button>Entrar em contato</Local.Button>
        </Local.Footer>
      </Local.Content>
    </Local.Container>
  );
};

export default CardsTeachers;
