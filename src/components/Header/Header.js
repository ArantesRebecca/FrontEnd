import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';

export default class Header extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => this.handleScroll(event))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (event) => this.handleScroll(event))
  }

  handleScroll() {
    if (window.pageYOffset >= 250 && !this.state.hidden) {
      this.setState({hidden: true})
    } else if (this.state.hidden && window.pageYOffset < 250) {
      this.setState({hidden: false})
    }
  }

  render() {
    const {
      hidden
    } = this.state

    return (
      <div>
        {/* {hidden ?  */}
        //Navbar
          <Navbar hidden={hidden}> </Navbar>
          {/* // : */}
          {/* // <Navbar> </Navbar> */}
        {/* } */}
        {/* Hero */}
        <div style={{height: '300px', width: '100%', backgroundColor: '#47286E'}}> </div>
        {hidden ? 
        //Filter
          <div style={{height: '50px', width: '100%', backgroundColor: 'white', position: "fixed", top: 50}}> </div>
          :
          <div style={{height: '50px', width: '100%', backgroundColor: 'white'}}> </div>
        }
        <div style={{height: '300px', width: '100%', backgroundColor: 'black'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
      </div>
      
    );
  }
}

Header.propTypes = {

};

Header.defaultProps = {

};