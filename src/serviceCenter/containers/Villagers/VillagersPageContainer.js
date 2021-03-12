import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import { useSelector } from 'react-redux';

function withVillagersPageContainer({ Component }) {
    function VillagersPageContainer() {
        const villagersTabs = useSelector((state) => state.Villagers.villagersTabs);
        return <Component villagersTabs={villagersTabs} />;
    }

    hoistNonReactStatic(VillagersPageContainer, withVillagersPageContainer);
    return VillagersPageContainer;
}

export default withVillagersPageContainer;
