import React, { Component, Fragment } from 'react';
import ReactRating from 'react-rating'
import { Wrapper } from './styles'

class Rating extends Component {

  render() {
    const { value, onChange } = this.props
    return (
      <Fragment>
        <Wrapper>
          <ReactRating
            initialRating={value}
            onChange={(value) => onChange(value)}
          />
        </Wrapper>
      </Fragment>
    )
  }
}

export default (Rating)