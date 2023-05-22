import * as Local from "./styles";

const SelectDays = () => {
  return (
    <Local.ContentComponent>
      <Local.SelectDay>
        <Local.Options>Selecione o dia</Local.Options>
        <Local.Options>Segunda</Local.Options>
        <Local.Options>Terça</Local.Options>
        <Local.Options>Quarta</Local.Options>
        <Local.Options>Quinta</Local.Options>
        <Local.Options>Sexta</Local.Options>
      </Local.SelectDay>
    </Local.ContentComponent>
  );
};

export default SelectDays;
