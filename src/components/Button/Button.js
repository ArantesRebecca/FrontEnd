import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ title }) => (
  <div>
    <StyledButton> {title} </StyledButton>
  </div>
);

Button.propTypes = {
  title: PropTypes.string.isRequired
}

export default Button;