import hoistNonReactStatic from 'hoist-non-react-statics';

function withVillagersPageContainer({ Component }) {
    function VillagersPageContainer() {
        return <Component />;
    }

    hoistNonReactStatic(VillagersPageContainer, withVillagersPageContainer);
    return VillagersPageContainer;
}

export default withVillagersPageContainer;
