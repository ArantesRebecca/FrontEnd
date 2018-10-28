import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {

  render() {
    const {
      fixed,
      position,
      reference
    } = this.props

    return (
      <div>
        {fixed ?
          <div ref={c => reference(c)} style={{height: '50px', width: '100%', backgroundColor: 'white', position: "fixed", top: position}}/>
          :
          <div ref={c => reference(c)} style={{height: '50px', width: '100%', backgroundColor: 'white'}}/>
        }
      </div>
    )
  }
};

Filter.propTypes = {
}

export default Filter;