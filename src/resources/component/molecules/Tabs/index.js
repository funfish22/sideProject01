import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';

import Card from '@component/molecules/Card';
import TabPanel from './TabPanel';

import { Grid, Tabs, Tab, Box } from '@material-ui/core';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabsRoot() {
    const theme = useTheme();

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
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <Box mx={-1}>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Grid container spacing={2}>
                            {cards.map((row) => (
                                <Grid item xs={4} key={row.id}>
                                    <Card title={row.title} id={row.id} imgUrl={row.imgUrl} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Grid container spacing={2}>
                            {cards.map((row) => (
                                <Grid item xs={6} key={row.id}>
                                    <Card title={row.title} id={row.id} imgUrl={row.imgUrl} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <Grid container spacing={2}>
                            {cards.map((row) => (
                                <Grid item xs={12} key={row.id}>
                                    <Card title={row.title} id={row.id} imgUrl={row.imgUrl} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </>
    );
}

export default TabsRoot;
