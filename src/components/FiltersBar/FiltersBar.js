import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import { Wrapper } from './styles';

class FiltersBar extends Component {

  avaliableFilters = () => {
    return (
    <Wrapper>
      <Filter title={'Datas'}></Filter>
      <Filter title={'Hóspedes'}></Filter>
      <Filter title={'Comodidades'}></Filter>
      <Filter title={'Preço'}></Filter>
      <Filter title={'Rating'}></Filter>
    </Wrapper>
  )}

  render() {
    const {
      hidden,
      position,
      reference
    } = this.props

    return (
      <div>
        {hidden ?
          <div ref={c => reference(c)} style={{ height: '60px', width: '100%', backgroundColor: 'white', position: "fixed", top: position }}> {this.avaliableFilters()} </div>
          :
          <div ref={c => reference(c)} style={{ height: '60px', width: '100%', backgroundColor: 'white' }}> {this.avaliableFilters()} </div>
        }
      </div>
    )
  }
};

Filter.propTypes = {
  hidden: PropTypes.bool.isRequired,
  position: PropTypes.number.isRequired,
  reference: PropTypes.func.isRequired
}

export default FiltersBar;