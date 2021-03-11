import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { useSelector } from 'react-redux';

function withHomePageContainer({ Component }) {
    function HomePageContainer() {
        const banner = useSelector((state) => state.Home.banner);

        const { speed, lists } = banner;

        return <Component speed={speed} lists={lists} />;
    }

    hoistNonReactStatic(HomePageContainer, withHomePageContainer);
    return HomePageContainer;
}

export default withHomePageContainer;
