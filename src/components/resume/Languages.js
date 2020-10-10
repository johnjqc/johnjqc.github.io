import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    
});

function Languages(props) {
    
    return (
        <div>
            <Typography variant="h6" color="secondary">Languages</Typography>
            <ul class="list-unstyled interests-list">
                <li>Spanish <span class="lang-desc">(Native)</span></li>
                <li>English <span class="lang-desc">B1</span></li>
            </ul>
        </div>
    );
}

export default withStyles(styles)(Languages);