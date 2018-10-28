import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import { Wrapper } from './styles';
import Guests from '../Guests/Guests';
import DatePicker from '../DatePicker/DatePicker';
import PriceSlider from '../PriceSlider/PriceSlider';
import Rating from '../Rating/Rating';

class FiltersBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
        ratingValue: 4,
        guestsCount: 0,
    }
}

  avaliableFilters = (ratingValue, guestsCount) => {
    return (
    <Wrapper>
      <Filter title={'Datas'}><DatePicker /></Filter>
      <Filter title={'Hóspedes'}><Guests value={guestsCount} onSave={(value) => this.setState({guestsCount: value})} /></Filter>
      <Filter title={'Comodidades'}></Filter>
      <Filter title={'Preço'}><PriceSlider /></Filter>
      <Filter title={'Rating'}><Rating value={ratingValue} onChange={(value) => this.setState({ratingValue: value})} /></Filter>
    </Wrapper>
  )}

  render() {
    const { hidden, position, reference } = this.props
    const { ratingValue, guestsCount } = this.state;
    return (
      <div>
        {hidden ?
          <div ref={c => reference(c)} style={{ height: '46px', width: '100%', backgroundColor: 'white', position: "fixed", top: position, boxShadow: '0 6px 4px -6px #383838' }}> {this.avaliableFilters(ratingValue)} </div>
          :
          <div ref={c => reference(c)} style={{ height: '46px', width: '100%', backgroundColor: 'white', boxShadow: '0 6px 4px -6px #383838' }}> {this.avaliableFilters(ratingValue, guestsCount)} </div>
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