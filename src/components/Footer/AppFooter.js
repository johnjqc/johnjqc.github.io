import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  copyright: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(1),
    background: '#eaeff1',
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://johnjqc.github.io/">John Quiroga</Link>
      {' '}
      2019 - {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function AppFooter(props) {

  const { classes } = props
  return (
    <div className={classes.copyright}>
      <Copyright />
    </div>
  );
}

export default withStyles(styles)(AppFooter);

