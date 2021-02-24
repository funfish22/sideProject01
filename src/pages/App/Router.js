import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from '@route';

import Loading from '@page/default/Loading/Loading';

function Router() {
    return (
        <Suspense fallback={Loading()}>
            <Switch>
                {routes.map((row, index) => (
                    <Route key={index} path={row.path} exact={row.exact} component={row.component}></Route>
                ))}
            </Switch>
        </Suspense>
    );
}

export default Router;
