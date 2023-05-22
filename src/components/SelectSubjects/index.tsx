import * as Local from "./styles";

const SelecSubjects = () => {
  return (
    <Local.ContentComponent>
      <Local.Select>
        <Local.Options>Selecione qual você quer ensinar</Local.Options>
        <Local.Options>Aulas</Local.Options>
      </Local.Select>
    </Local.ContentComponent>
  );
};

export default SelecSubjects;
