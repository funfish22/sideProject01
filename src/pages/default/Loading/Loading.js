import React from 'react';
import withCalendarPageContainer from '@serviceCenter/containers/Calendar/CalendarPageContainer';

import { Container, Typography } from '@material-ui/core';

function LoadingPage() {
    return (
        <Container>
            <Typography component="p">Loading profile...</Typography>
        </Container>
    );
}

const LoadingPageWrapperWithContainer = withCalendarPageContainer({
    Component: LoadingPage,
});

export default LoadingPageWrapperWithContainer;
