import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import PopoverFooter from '../PopoverFooter/PopoverFooter';
import { Chip } from './styles';

export default class Filter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isSelected: false,
      icon: null,
      open: false,
      anchorEl: null,
    }
  }

  toggleIsSelected = (event) => {
    this.setState({ isSelected: !this.state.isSelected, open: true, anchorEl: event.currentTarget })
  }

  render() {
    const { isSelected, open, anchorEl } = this.state;
    const { title, children } = this.props;
    return (
      <div>
        <Chip label={title} variant="outlined" onClick={this.toggleIsSelected} isSelected={isSelected} clickable={false} />
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={() => this.setState({ open: false, isSelected: false })}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {children}
          <PopoverFooter onSave={() => this.setState({ open: false, isSelected: false })} />
        </Popover>
      </div>

    )
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired
}
