import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

function withLoadingPageContainer({ Component }) {
    function LoadingPageContainer() {
        return <Component />;
    }

    hoistNonReactStatic(LoadingPageContainer, withLoadingPageContainer);
    return LoadingPageContainer;
}

export default withLoadingPageContainer;
