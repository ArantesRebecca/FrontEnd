import React, { Component, Fragment } from 'react';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';
import { Wrapper, Title } from './styles';

//This is a MaterialUI component and in a real project this can be done following the company design patterns 
const styles = {
  slider: {
    padding: '16px 0px',
  },
};

class PriceInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 50
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <Fragment>
        <Wrapper>
          <Title> ${value.toFixed(0)} </Title>
          <Slider
            classes={{ container: classes.slider }}
            value={value}
            aria-labelledby="label"
            onChange={this.handleChange}
          />
        </Wrapper>
      </Fragment>
    )
  }
}

export default withStyles(styles)(PriceInfo)