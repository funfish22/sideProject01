import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { useSelector } from 'react-redux';

function withHomePageContainer({ Component }) {
    function HomePageContainer() {
        const banner = useSelector((state) => state.Home.banner);
        const homeTabs = useSelector((state) => state.Home.homeTabs);
        const lists = useSelector((state) => state.Villagers.lists);

        const { speed, bannerLists } = banner;

        return <Component speed={speed} bannerLists={bannerLists} homeTabs={homeTabs} lists={lists} />;
    }

    hoistNonReactStatic(HomePageContainer, withHomePageContainer);
    return HomePageContainer;
}

export default withHomePageContainer;
