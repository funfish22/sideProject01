import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import Card from '@component/molecules/Card';
import TabPanel from './TabPanel';

import { Grid, Tabs, Tab, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
    },
}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabsRoot(props) {
    const { homeTabs } = props;

    const theme = useTheme();
    const classes = useStyles();

    const cards = useSelector((state) => state.Villagers.lists);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                {homeTabs.map((row, index) => (
                    <Tab key={index} label={row.title} {...a11yProps(index)} />
                ))}
            </Tabs>
            <Box mx={-1}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    {homeTabs.map((row, index) => (
                        <TabPanel key={index} value={value} index={index} dir={theme.direction}>
                            <Grid container>
                                {cards.map((row) => (
                                    <Grid item xs={4} sm={3} md={2} key={row.id} className={classes.card}>
                                        <Card title={row.title} id={row.id} imgUrl={row.imgUrl} />
                                    </Grid>
                                ))}
                            </Grid>
                        </TabPanel>
                    ))}
                </SwipeableViews>
            </Box>
        </>
    );
}

TabsRoot.propTypes = {
    homeTabs: PropTypes.array,
};

export default TabsRoot;
