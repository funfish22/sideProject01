import React, { useState } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Router from './Router';

import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

import Header from '@component/organisms/Header';
import Footer from '@component/organisms/Footer';

const useStyles = makeStyles((theme) => ({
    boxRoot: {
        padding: '56px 0',
    },
}));

function App() {
    const classes = useStyles();

    return (
        <HashRouter>
            <Header />
            <Box className={classes.boxRoot}>
                <Router />
            </Box>
            <Footer />
        </HashRouter>
    );
}

export default App;
