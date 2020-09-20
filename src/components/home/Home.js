
import React from 'react';

import AppHeaderBar from '../AppBar/AppHeaderBar'
import MainBody from './MainBody'
import AppFooter from '../Footer/AppFooter'

import { withStyles } from '@material-ui/core/styles';
import withRoot from "../theme/withRoot";

const styles = (theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }
});

function Home(props) {
    const { classes } = props

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppHeaderBar />
                <MainBody />
                <AppFooter />
            </div>
        </React.Fragment>
    );
}

export default withRoot(withStyles(styles)(Home));