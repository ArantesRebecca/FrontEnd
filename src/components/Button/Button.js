import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ title }) => (
  <Fragment>
    <StyledButton> {title} </StyledButton>
  </Fragment>
);

Button.propTypes = {
  title: PropTypes.string.isRequired
}

export default Button;