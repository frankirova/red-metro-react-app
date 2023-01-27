import { Container, Select } from "@chakra-ui/react";
// import "./Select.css";
export const CustomSelect = () => {
  return (
    <Container p={4}>
      <Select placeholder="Seleccionar zona" size="lg">
        <option>Artesanos</option>
        <option>Autodromo</option>
        <option>Villa allende</option>
        <option>16 de Noviembre</option>
        <option>Nueva Esperanza</option>
        <option>Granja de Funes</option>
        <option>Country La Deseada</option>
        <option>Mediolaza</option>
        <option>Calera</option>
      </Select>
    </Container>
  );
};
