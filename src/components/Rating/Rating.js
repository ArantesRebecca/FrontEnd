import React, { Component, Fragment } from 'react';
import Rating from 'react-rating'
import { Wrapper } from './styles'

class RatingInfo extends Component {

  render() {
    const { value, onChange } = this.props
    return (
      <Fragment>
        <Wrapper>
          <Rating
            initialRating={value}
            onChange={(value) => onChange(value)}
          />
        </Wrapper>
      </Fragment>
    )
  }
}

export default (RatingInfo)