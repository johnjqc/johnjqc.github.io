
import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
  },
  title: {
      margin: theme.spacing(5),
  },
});

function Profile(props) {
  const { classes } = props

  return (
    <div>
      <Typography variant="h6" color="secondary" className={classes.title}>Career Profile</Typography>
      <Typography variant="body1" color="Warning" align="center">
        <p>
          John Jairo is active, dynamic, enterprising, knows what he wants and works to get it. 
          You can be fully confident that you will perform your duties satisfactorily. 
          He is a nice person, easily connected and respectful to everyone around him.
        </p>
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Profile);