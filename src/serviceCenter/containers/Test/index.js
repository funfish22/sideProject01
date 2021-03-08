import hoistNonReactStatic from 'hoist-non-react-statics';
import { useSelector, useDispatch } from 'react-redux';

function withTestPageContainer({ Component }) {
    function TestPageContainer() {
        const switch123 = useSelector((state) => state.App.backShow);

        return <Component switch123={switch123} />;
    }

    hoistNonReactStatic(TestPageContainer, withTestPageContainer);
    return TestPageContainer;
}

export default withTestPageContainer;
