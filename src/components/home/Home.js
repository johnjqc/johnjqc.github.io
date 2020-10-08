
import React from 'react';

import AppHeaderBar from '../AppBar/AppHeaderBar'
import Resume from '../resume/Resume'
import AppFooter from '../Footer/AppFooter'

import { withStyles } from '@material-ui/core/styles';
import withRoot from "../theme/withRoot";

const styles = (theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    body : {
        flex: 1,
        paddingTop: theme.spacing(5),
    },
});

function Home(props) {
    const { classes } = props

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppHeaderBar />
                <div className={classes.body}>
                    <Resume />
                </div>
                <AppFooter />
            </div>
        </React.Fragment>
    );
}

export default withRoot(withStyles(styles)(Home));