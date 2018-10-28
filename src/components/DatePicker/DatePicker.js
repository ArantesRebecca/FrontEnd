import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PopoverFooter from '../PopoverFooter/PopoverFooter';
import { Wrapper } from './styles';

//This is a material UI Component, in a real project this can be customized to match the company visual identity 
const styles = theme => ({
    above: {
        marginBottom: 30
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    }
});

class DatePicker extends Component{

    render() {
        const { classes, changeEntrance, changeExit } = this.props;

        return (
            <Wrapper>
                <form className={classes.above} noValidate>
                    <TextField
                        id="date"
                        label="Entrada"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        onChange={(event) => changeEntrance(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <form noValidate>
                    <TextField
                        id="date"
                        label="Saída"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        onChange={(event) => changeExit(event.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <PopoverFooter />
            </Wrapper>
        );
    }
}

DatePicker.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePicker);