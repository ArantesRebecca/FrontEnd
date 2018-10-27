import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { Logo } from './styles';

export default class MenuListComposition extends React.Component {
  // state = {
  //   open: false,
  // };

  // handleToggle = () => {
  //   this.setState(state => ({ open: !state.open }));
  // };

  // handleClose = event => {
  //   if (this.anchorEl.contains(event.target)) {
  //     return;
  //   }

  //   this.setState({ open: false });
  // };

  render() {
    const { isOpen } = this.props;
    return (
      <Fragment>
        <Logo src={require('../../assets/allpoints-white.jpeg')}></Logo>
        <Popper open={isOpen} anchorEl={this.anchorEl} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Fragment>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};
