import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import withVillagersPageContainer from '@serviceCenter/containers/Villagers/VillagersPageContainer';

import Tabs from '@component/molecules/Tabs';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Breadcrumbs, Link } from '@material-ui/core';

const Detail = React.lazy(() =>
    import(/*webpackChunkName:"VillagersDetail"*/ /*webpackMode:"lazy"*/ '@page/default/Villagers/detail')
);

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

function VillagersPage(props) {
    const match = useRouteMatch();
    const classes = useStyles();

    const { villagersTabs } = props;

    return (
        <Switch>
            <Route exact path={match.path}>
                <Container component={Box} my={3} color="primary.main">
                    <Box>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link component={RouterLink} color="inherit" to="/">
                                Home
                            </Link>
                            <Typography color="textPrimary">Villagers</Typography>
                        </Breadcrumbs>
                    </Box>
                    <Typography component="h2" variant="h5" className={classes.title}>
                        Title
                    </Typography>
                    <Tabs tabs={villagersTabs} />
                </Container>
            </Route>
            <Route path={`${match.path}/:id`}>
                <Detail />
            </Route>
        </Switch>
    );
}

VillagersPage.propTypes = {
    villagersTabs: PropTypes.array,
};

const VillagersWrapperWithContainer = withVillagersPageContainer({
    Component: VillagersPage,
});

export default VillagersWrapperWithContainer;
