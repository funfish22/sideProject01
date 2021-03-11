import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

function withPageNotFoundPageContainer({ Component }) {
    function PageNotFoundPageContainer() {
        return <Component />;
    }

    hoistNonReactStatic(PageNotFoundPageContainer, withPageNotFoundPageContainer);
    return PageNotFoundPageContainer;
}

export default withPageNotFoundPageContainer;
