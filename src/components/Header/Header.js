import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { HeroWrapper, StyledHeader } from './styles';

export const SCREEN_TYPES = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop"
}

export default class Header extends PureComponent {

  constructor(props) {
    super(props)
    this.mock = {
      searchedPlace:'Amsterdã, Reino dos Países Baixos',
      searchResult:'209'
    }
    this.state = {
      hidden: false,
      screenType: SCREEN_TYPES.desktop
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll())
    window.addEventListener('resize', () => this.updateWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll())
    window.removeEventListener('resize', () => this.updateWindowDimensions());
  }

  handleScroll() {
    if (window.pageYOffset >= 200 && !this.state.hidden) {
      this.setState({hidden: true})
    } else if (this.state.hidden && window.pageYOffset < 200) {
      this.setState({hidden: false})
    }
  }

  updateWindowDimensions() {
    // this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth <= 768) {
      this.setState({screenType: SCREEN_TYPES.mobile})
    } else if (window.innerWidth <= 992) {
      this.setState({screenType: SCREEN_TYPES.tablet})
    } else {
      this.setState({screenType: SCREEN_TYPES.desktop})
    }
  }

  render() {
    const { hidden, screenType } = this.state;
    const { searchedPlace, searchResult } = this.mock;
    return (
      <StyledHeader>
        {/* {hidden ?  */}
        {/* //Navbar */}
          <Navbar hidden={hidden}> </Navbar>
        {/* <div style={{height: '300px', width: '100%', backgroundColor: '#47286E'}}> </div> */}
        <HeroWrapper>
        <Hero searchedPlace={searchedPlace} searchResult={searchResult} />
        </HeroWrapper>
        
        {/* {hidden ? 
        //Filter
          <div style={{height: '50px', width: '100%', backgroundColor: 'white', position: "fixed", top: screenType == SCREEN_TYPES.desktop ? 80 : 60}}> </div>
          :
          <div style={{height: '50px', width: '100%', backgroundColor: 'white'}}> </div>
        } */}
        <div style={{height: '300px', width: '100%', backgroundColor: 'black'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
        <div style={{height: '300px', width: '100%', backgroundColor: 'gray'}}> </div>
      </StyledHeader>
      
    );
  }
}

Header.propTypes = {
  searchedPlace: PropTypes.string,
  searchResult: PropTypes.string
};

Header.defaultProps = {
  searchedPlace: '',
  searchResult: ''
};