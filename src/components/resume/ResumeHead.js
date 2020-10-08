import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import SocialMedia from './SocialMedia';
import Education from './Education';
import Languages from './Languages';
import Interests from './Interests';

const styles = (theme) => ({
    
});

function ResumeHead(props) {
    const { classes } = props

    return (
        <div>
            <SocialMedia />
            <Education />
            <Languages />
            <Interests />
        </div>
    );
}

export default withStyles(styles)(ResumeHead);