import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import Router from './Router';

import withAppPageContainer from '@serviceCenter/containers/App/AppPageContainer';

import { Box } from '@material-ui/core';

import Header from '@component/organisms/Header';
import Footer from '@component/organisms/Footer';

function AppPage(props) {
    const { footerShow } = props;

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

const AppPageWrapperWithContainer = withAppPageContainer({
    Component: AppPage,
});

export default AppPageWrapperWithContainer;
