
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ResumeBody from './ResumeBody';
import ResumeHead from './ResumeHead';

const styles = (theme) => ({
    root: {
        
    }
});

function Resume(props) {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={16} justify="flex-start">
                <Box clone order={{ xs: 3, sm: 2 }}>
                    <Grid item xs={12} sm={9}>
                        <ResumeBody />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 2, sm: 3 }}>
                    <Grid item xs={12} sm={3}>
                        <ResumeHead />
                    </Grid>
                </Box>
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(Resume);