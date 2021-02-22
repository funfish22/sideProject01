import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { DateRange as DateRangeIcon, Home as HomeIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    bottomNavigation: {
        'max-width': 'none',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
}));

function Footer() {
    var hash = window.location.hash.replace(/#/i, '');
    const classes = useStyles();
    const [value, setValue] = React.useState(hash);

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.bottomNavigationRoot}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    value="/"
                    className={classes.bottomNavigation}
                    label="首頁"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/Calendar"
                    value="/Calendar"
                    className={classes.bottomNavigation}
                    label="行事曆"
                    icon={<DateRangeIcon />}
                />
            </BottomNavigation>
        </AppBar>
    );
}

export default Footer;
