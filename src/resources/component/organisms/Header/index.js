import React, { useState } from 'react';

import LeftDrawer from '@component/molecules/LeftDrawer';

import { makeStyles } from '@material-ui/core/styles';

import { Container, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import { Menu as MenuIcon, AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontSize: '24px',
    },
}));

function Header() {
    const classes = useStyles();
    const [leftDrawerSwitch, setleftDrawerSwitch] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setleftDrawerSwitch(open);
    };

    return (
        <AppBar position="fixed">
            <Container>
                <Toolbar disableGutters>
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <LeftDrawer open={leftDrawerSwitch} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} />
                    <Typography variant="h1" className={classes.title}>
                        project
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
