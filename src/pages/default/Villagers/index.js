import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Detail from './detail';

import { Container, Box, Typography } from '@material-ui/core';

function Villagers() {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route path={`${match.path}/:id`}>
                <Detail />
            </Route>
            <Route path={match.path}>
                <Container component={Box} my={3}>
                    <Typography component="h2" variant="h5">
                        尚未開發
                    </Typography>
                </Container>
            </Route>
        </Switch>
    );
}

export default Villagers;
