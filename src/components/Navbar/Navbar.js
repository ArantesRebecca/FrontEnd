import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Nav } from './styles';
import { Logo } from './styles';

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
    const { hidden } = this.props;
    return (
      <Nav>
        <Logo src={require('../../assets/allpoints-white.jpeg')}></Logo>
      </Nav> 
    );
  }
}

Navbar.propTypes = {

};

Navbar.defaultProps = {

};