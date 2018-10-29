import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Nav, Logo, ButtonWrapper, Divider } from './styles';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import { SCREEN_TYPES } from './../Header/Header'

export default class Navbar extends PureComponent {
  render() {
    const { hidden, screenType } = this.props;
    return (
      <Nav>
        <Logo src={require('../../assets/allpoints-white.jpeg')} />
        {hidden ? <SearchBar></SearchBar> : null}
        <Divider />
        {
          screenType !== SCREEN_TYPES.mobile &&
          <ButtonWrapper>
            <Button title={'faça sua reserva'} />
            <Button title={'troque seus pontos'} />
            <Button title={'Login'} />
          </ButtonWrapper>
        }
      </Nav>
    );
  }
}

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  hidden: PropTypes.bool.isRequired,
};