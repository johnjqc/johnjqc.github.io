import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  mainBody: {
    flex: 1,
  },
});

function MainBody(props) {
  const { classes } = props

  return (
    <main className={classes.mainBody}>
    </main>
  );
}
  
export default withStyles(styles)(MainBody);
