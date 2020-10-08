import React from 'react';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
});

function Education(props) {
  const { classes } = props

  return (
    <div>
      <Typography variant="h6" color="secondary">Education</Typography>
      <List className={classes.root}>
        <ListItem>
          <ListItemText primary="Ingeniería en Telemática"
            secondary={
              <React.Fragment>
                <Typography
                  component="h2"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Universidad Distrital Francisco José de Caldas
                </Typography>
                {"2013 - 2015"}
              </React.Fragment>
            } />

        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Tecnólogo en Sistematización de Datos"
            secondary={
              <React.Fragment>
                <Typography
                  component="h2"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Universidad Distrital Francisco José de Caldas
                </Typography>
                {"2005 - 2011"}
              </React.Fragment>
            } />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Técnico Laboral en Tecnología e Informática"
            secondary={
              <React.Fragment>
                <Typography
                  component="h2"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Corporación “El minuto de Dios” Gente Viva Ecoparque
                </Typography>
                {"2003 - 2005"}
              </React.Fragment>
            } />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(Education);