import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { HeroWrapper, StyledHeader } from './styles';
import FiltersBar from '../FiltersBar/FiltersBar'
import ContentPlaceholder from '../ContentPlaceholder/ContentPlaceholder'

export const SCREEN_TYPES = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop"
}

export default class Header extends PureComponent {

  constructor(props) {
    super(props)
    this.mock = {
      searchedPlace: 'Amsterdã, Reino dos Países Baixos',
      searchResult: '209'
    }
    this.state = {
      hidden: false,
      filtersTopAnchor: 324,
      screenType: SCREEN_TYPES.desktop
    }
    this._filters = null
  }

  componentWillMount() {
    this.updateWindowDimensions()
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll())
    window.addEventListener('resize', () => this.updateWindowDimensions());
    if (this._filters) {
      this.setState({ filtersTopAnchor: this._filters.offsetTop - (this.screenType === SCREEN_TYPES.desktop ? 80 : 60) }) // Sets the position to fix the filter view at the navbar
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll())
    window.removeEventListener('resize', () => this.updateWindowDimensions());
  }

  handleScroll() {
    if (window.pageYOffset >= this.state.filtersTopAnchor && !this.state.hidden) {
      this.setState({ hidden: true })
    } else if (this.state.hidden && window.pageYOffset < this.state.filtersTopAnchor) {
      this.setState({ hidden: false })
    }
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.setState({ screenType: SCREEN_TYPES.mobile })
    } else if (window.innerWidth < 992) {
      this.setState({screenType: SCREEN_TYPES.tablet})
    } else {
      this.setState({screenType: SCREEN_TYPES.desktop})
    }
  }

  render() {
    const { hidden, screenType } = this.state;
    const { searchedPlace, searchResult } = this.mock;
    return (
      <Fragment>
        <Navbar hidden={hidden} screenType={screenType} />
        <HeroWrapper>
          <Hero searchedPlace={searchedPlace} searchResult={searchResult} />
        </HeroWrapper>
        <FiltersBar reference={(ref) => this._filters = ref} hidden={hidden} position={screenType === SCREEN_TYPES.desktop ? 80 : 60} />

        {/* Content Placeholder set for ilustrate content in page */}
        <ContentPlaceholder />
      </Fragment>
    );
  }
}

Header.propTypes = {
  hidden: PropTypes.bool.isRequired,
  screenType: PropTypes.string,
  searchedPlace: PropTypes.string,
  searchResult: PropTypes.string
};

Header.defaultProps = {
  screenType: SCREEN_TYPES.desktop,
  searchedPlace: '',
  searchResult: ''
};