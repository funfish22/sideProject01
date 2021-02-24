import React, { useState } from 'react';

import Tabs from '@component/molecules/Tabs';

import { makeStyles } from '@material-ui/core/styles';

import { Container, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    media: {
        height: 100,
    },
    mediaTitle: {
        margin: 0,
    },
}));

function Home() {
    const classes = useStyles();

    return (
        <Container>
            <Box color="primary.main" mb={2}>
                <Typography component="h2" variant="h5" className={classes.title}>
                    Title
                </Typography>
                <Tabs />
            </Box>
        </Container>
    );
}

export default Home;
