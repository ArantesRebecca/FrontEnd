import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const OutlinedButton = ({ title }) => (
  <Fragment>
    <StyledButton> {title} </StyledButton>
  </Fragment>
);

OutlinedButton.propTypes = {
  title: PropTypes.string.isRequired
}

export default OutlinedButton;