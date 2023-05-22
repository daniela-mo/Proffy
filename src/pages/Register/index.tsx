import * as Local from "./styles";
import seta from "../../assets/seta.svg";
import logo from "../../assets/Proffy.svg";
import ComponentForm from "../../components/Form";

const Cadastro = () => {
  return (
    <Local.Container>
      <Local.Content>
        <Local.Header>
          <Local.IconSeta src={seta} />
          <Local.Logo src={logo} />
        </Local.Header>
        <ComponentForm></ComponentForm>
      </Local.Content>
    </Local.Container>
  );
};

export default Cadastro;
