import React from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import Headroom from 'react-headroom';

import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import avatarImg from "../../images/yo32.jpeg";

const styles = (theme) => ({
    title: {
      fontSize: 24,
      display: 'flex',
      marginLeft: theme.spacing(3),
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 1,
      display: 'none',
      justifyContent: 'flex-end',
    },
    rightLink: {
      fontSize: 16,
      color: theme.palette.common.white,
      marginLeft: theme.spacing(3),
      '&:hover': {
        '& $imageMarked': {
          display: 'block',
        },
      },
    },
    linkSecondary: {
      color: theme.palette.secondary.main,
    },
    imageTitle: {
      position: 'relative',
      //padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      paddingBottom: theme.spacing(1)
    },
    imageMarked: {
      height: 3,
      width: 18,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
      backgroundColor: theme.palette.common.white,
      display: 'none'
    },
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
        <div className={classes.root}>
          <Headroom>
            <AppBar position="sticky">
                <Toolbar>
                  <div className={classes.left} />
                  <StyledBadge
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
                    {'John Quiroga'}
                  </Link>
                  <div className={classes.right}>
                    <Hidden xsDown>
                      <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        className={classes.rightLink}
                        href="/sign-in/" >
                          <Typography
                          component="span"
                          variant="h6"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                        {'Blog'}
                          <span className={classes.imageMarked} />
                        </Typography>
                      </Link>
                      <Link
                        color="inherit"
                        variant="h6"
                        underline="none"
                        className={classes.rightLink}
                        href="/sign-in/" >
                          <Typography
                          component="span"
                          variant="h6"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                        {'Projects'}
                          <span className={classes.imageMarked} />
                        </Typography>
                      </Link>
                      <Link
                        variant="h6"
                        underline="none"
                        className={clsx(classes.rightLink, classes.linkSecondary)}
                        href="/sign-up/" >
                        <Typography
                          component="span"
                          variant="h6"
                          color="inherit"
                          className={classes.imageTitle}
                        >
                          {'Contact'}
                          <span className={classes.imageMarked} />
                        </Typography>
                      </Link>
                    </Hidden>
                  </div>
                  <div className={classes.left} />
                </Toolbar>
            </AppBar>
            </Headroom>
        </div>
    );
}

AppHeaderBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHeaderBar);