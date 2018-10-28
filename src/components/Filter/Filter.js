import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Chip } from './styles';

export default class Filter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false,
    }
  }

  toggleIsSelected = () => {this.setState({ isSelected: !this.state.isSelected })}

  render() {
    const { isSelected } = this.state;
    const { title } = this.props;
    console.log(title)
    return (
      <Chip label={title} variant="outlined" onClick={() => this.toggleIsSelected()} isSelected={isSelected}>
      </Chip>
    )
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired
}
