import React from 'react';
import { Wrapper, Title, Footer, Line } from "./styles";

const PopoverFooter = () => (
  <Footer>
    <Line />
    <Wrapper>
      <Title clean>Limpar</Title>
      <Title>Aplicar</Title>
    </Wrapper>
  </Footer>
);

export default PopoverFooter;