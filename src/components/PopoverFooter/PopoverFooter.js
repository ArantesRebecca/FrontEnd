import React from 'react';
import { Wrapper, Title, Footer, Line } from "./styles";

const PopoverFooter = ({ onSave }) => (
  <Footer>
    <Line />
    <Wrapper>
      <Title clean>Limpar</Title>
      <Title onClick={onSave}>Aplicar</Title>
    </Wrapper>
  </Footer>
);

export default PopoverFooter;