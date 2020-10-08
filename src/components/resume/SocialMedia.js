import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import LinkedInIcon from "../../images/linkedin.svg";
import TwitterIcon from "../../images/twitter.svg";
import InstagramIcon from "../../images/instagram.png";
import GithubIcon from "../../images/github.png";
import YoutubeIcon from "../../images/youtube.png";

const styles = (theme) => ({
    
});

function SocialMedia(props) {
    const { classes } = props

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={LinkedInIcon} />
                </ListItemAvatar>
                <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.linkedin.com/in/johnquirogac/">
                    {'@johnquirogac'}
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={TwitterIcon} />
                </ListItemAvatar>
                <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://twitter.com/john_quirogac">
                    {'@john_quirogac'}
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={InstagramIcon} />
                </ListItemAvatar>
                <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.instagram.com/john_quirogac/">
                    {'@john_quirogac'}
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={GithubIcon} />
                </ListItemAvatar>
                <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.github.com/johnjqc/">
                    {'@johnjqc'}
                    </Link>
                </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={YoutubeIcon} />
                </ListItemAvatar>
                <ListItemText>
                    <Link underline="none" color="inherit"
                    href="https://www.youtube.com/channel/UCSZ6j4zbsSNclhklDYgKxEg/">
                    {'@EsOtroCanal'}
                    </Link>
                </ListItemText>
            </ListItem>
        </List>
    );
}

export default withStyles(styles)(SocialMedia);