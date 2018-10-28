import React from 'react';
import PropTypes from 'prop-types';
import OutlinedButton from '../OutlinedButton/OutlinedButton'
import { Title, Subtitle, Wrapper } from './styles';

const Hero = ({searchedPlace, searchResult}) => (
  <Wrapper>
    <Title> {searchedPlace} </Title>
    <Subtitle> Encontramos {searchResult} Hotéis </Subtitle>
    <OutlinedButton title={'Alterar destino'} />
  </Wrapper>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired
}

export default Hero;