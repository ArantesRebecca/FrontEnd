import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { HeroWrapper, StyledHeader } from './styles';
import FiltersBar from '../FiltersBar/FiltersBar'

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
      filtersTopAnchor: 324
    }

    this._filters = null
    this.screenType = SCREEN_TYPES.desktop
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll())
    window.addEventListener('resize', () => this.updateWindowDimensions());
    if (this._filters) {
      this.setState({filtersTopAnchor: this._filters.offsetTop - (this.screenType === SCREEN_TYPES.desktop ? 80 : 60)}) // Sets the position to fix the filter view at the navbar
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll())
    window.removeEventListener('resize', () => this.updateWindowDimensions());
  }

  handleScroll() {
    if (window.pageYOffset >= this.state.filtersTopAnchor && !this.state.hidden) {
      this.setState({hidden: true})
    } else if (this.state.hidden && window.pageYOffset < this.state.filtersTopAnchor) {
      this.setState({hidden: false})
    }
  }

  updateWindowDimensions() {
    if (window.innerWidth <= 768) {
      this.screenType = SCREEN_TYPES.mobile
    } else if (window.innerWidth <= 992) {
      this.screenType = SCREEN_TYPES.tablet
    } else {
      this.screenType = SCREEN_TYPES.desktop
    }
  }

  render() {
    const { hidden, screenType } = this.state;
    const { searchedPlace, searchResult } = this.mock;
    return (
      <StyledHeader>
          <Navbar hidden={hidden}> </Navbar>
        <HeroWrapper>
        <Hero searchedPlace={searchedPlace} searchResult={searchResult} />
        </HeroWrapper>
        <FiltersBar reference={(ref) => this._filters = ref} hidden={hidden} position={this.screenType === SCREEN_TYPES.desktop ? 80 : 60}/>
        <div style={{height: '2000px', width: '100%', backgroundColor: 'gray'}}> </div>
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