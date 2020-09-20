import React from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Toolbar, { styles as toolbarStyles } from './Toolbar';

import avatarImg from "../../images/yo32.jpeg";


const styles = (theme) => ({
    title: {
      fontSize: 24,
    },
    placeholder: toolbarStyles(theme).root,
    toolbar: {
      justifyContent: 'space-between',
    },
    left: {
      flex: 1,
    },
    leftLinkActive: {
      color: theme.palette.common.white,
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
    },
    avatar: {
      marginRight: theme.spacing(3),
    }
  });


  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

function AppHeaderBar(props) {
    const { classes } = props

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                  <div className={classes.left} />
                  <StyledBadge className={classes.avatar}
                    overlap="circle"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot" >
                    <Avatar alt="J" src={avatarImg} />
                  </StyledBadge>
                  <Link
                    variant="h6"
                    underline="none"
                    color="inherit"
                    className={classes.title}
                    href="/">
                    
                    {'John Quiroga C.'}
                  </Link>
                  <div className={classes.right}>
                    <Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={classes.rightLink}
                      href="/sign-in/" >
                      {'Blog'}
                    </Link>
                    <Link
                      color="inherit"
                      variant="h6"
                      underline="none"
                      className={classes.rightLink}
                      href="/sign-in/" >
                      {'Projects'}
                    </Link>
                    <Link
                      variant="h6"
                      underline="none"
                      className={clsx(classes.rightLink, classes.linkSecondary)}
                      href="/sign-up/" >
                      {'Contact'}
                    </Link>
                  </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppHeaderBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeaderBar);