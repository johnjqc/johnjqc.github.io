import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ImageIcon from '@material-ui/icons/Image';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    
});

function Interests(props) {
    const { classes } = props

    return (
        <div>
            <Typography variant="h6" color="secondary">Interests</Typography>
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                <ListItemText primary="Photography" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <MenuBookIcon />
                        </Avatar>
                    </ListItemAvatar>
                <ListItemText primary="Learning" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                        <FlightTakeoffIcon />
                        </Avatar>
                    </ListItemAvatar>
                <ListItemText primary="Travel" />
                </ListItem>
            </List>
        </div>
    );
}

export default withStyles(styles)(Interests);