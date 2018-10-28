import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Nav, Logo, ButtonWrapper, Divider } from './styles';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
// import Dropdown from '../Dropdown/Dropdown';
import { SCREEN_TYPES } from './../Header/Header'

export default class Navbar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { hidden, screenType } = this.props;
    const { open } = this.state;
    console.log('hidden', hidden)
    return (
      <Nav>
          <Logo src={require('../../assets/allpoints-white.jpeg')} />
          { hidden ? <SearchBar></SearchBar> : null}
          <Divider /> 
          {
            screenType !== SCREEN_TYPES.mobile &&
              <ButtonWrapper>
                <Button title={'faça sua reserva'}/>
                <Button title={'troque seus pontos'}/>
                <Button title={'Login'}/>
              </ButtonWrapper>
          }
          
          {/*TODO: Set dropdown for mobile version latter  */}
        {/* <Dropdown isOpen={open} onClick={() => console.log('a')}></Dropdown> */}
      </Nav> 
    );
  }
}

Navbar.propTypes = {
  hidden: PropTypes.bool.isRequired,
  screenType: PropTypes.string.isRequired
};