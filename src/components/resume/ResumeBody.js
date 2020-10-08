import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Profile from './Profile'
import Experiences from './Experiences'
import Skills from './Skills'

const styles = (theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            marginRight: theme.spacing(2),
        },
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(5.5),
        },
    },
});

function ResumeBody(props) {
    const { classes } = props

    return (
        <div className={classes.root}>
            <Profile />
            <Experiences />
            <Skills />
        </div>
    );
}

export default withStyles(styles)(ResumeBody);