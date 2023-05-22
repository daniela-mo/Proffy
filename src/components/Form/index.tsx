import * as Local from "./styles";
import SelecSubjects from "../SelectSubjects";
import SelecDays from "../SelecDays";
import important from "../../assets/Atenção.svg";

const ComponentForm = () => {
  return (
    <Local.Content>
      <Local.Text>
        <Local.Subtitle>Que incrível que você quer dar aulas.</Local.Subtitle>
        <Local.Paragraph>
          O primeiro passo, é preencher esse formulário de inscrição.
        </Local.Paragraph>
      </Local.Text>
      <Local.Form>
        <Local.TitleForm>Seus dados</Local.TitleForm>
        <Local.Label>Nome completo</Local.Label>
        <Local.Input />
        <Local.Label>Link da sua foto</Local.Label>
        <Local.Input />
        <Local.Label>Whatsapp</Local.Label>
        <Local.Input />
        <Local.Label>Biografia</Local.Label>
        <Local.TextArea />
        <Local.TitleForm>Sobre a aula</Local.TitleForm>
        <Local.Label>Matéria</Local.Label>
        <SelecSubjects></SelecSubjects>
        <Local.Label>Custo da sua hora por aula</Local.Label>
        <Local.Input />
        <Local.TextHour>
          <Local.SubtitleText>Horários disponíveis</Local.SubtitleText>

          <Local.NewHour>+ Novo horário</Local.NewHour>
        </Local.TextHour>

        <Local.ContentHour>
          <Local.OrganizeHour>
            <Local.Label>Dia da semana</Local.Label>
            <SelecDays></SelecDays>
          </Local.OrganizeHour>
          <Local.OrganizeHour>
            <Local.Label>Das</Local.Label>
            <Local.InputHour />
          </Local.OrganizeHour>
          <Local.OrganizeHour>
            <Local.Label>Até</Local.Label>
            <Local.InputHour />
          </Local.OrganizeHour>
        </Local.ContentHour>
      </Local.Form>
      <Local.RodapeForm>
        <Local.ContentRodape>
          <Local.Important>
            <Local.ImportantImage src={important} />
            Importante! <br></br>
            Preencha todos os dados
          </Local.Important>
          <Local.ButtonRodape>Salvar cadastro</Local.ButtonRodape>
        </Local.ContentRodape>
      </Local.RodapeForm>
    </Local.Content>
  );
};

export default ComponentForm;
