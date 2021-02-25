import React, { useState } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { useSelector, useDispatch } from 'react-redux';

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
    const footerShow = useSelector((state) => state.App.footerShow);

    return (
        <HashRouter>
            <Header />
            <Box py={{ xs: 7, sm: 8 }}>
                <Router />
            </Box>
            <Box display={footerShow}>
                <Footer />
            </Box>
        </HashRouter>
    );
}

export default App;
