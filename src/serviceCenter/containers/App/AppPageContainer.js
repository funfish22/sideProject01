import hoistNonReactStatic from 'hoist-non-react-statics';
import { useSelector, useDispatch } from 'react-redux';

function withAppPageContainer({ Component }) {
    function AppPageContainer() {
        const footerShow = useSelector((state) => state.App.footerShow);

        return <Component footerShow={footerShow} />;
    }

    hoistNonReactStatic(AppPageContainer, withAppPageContainer);
    return AppPageContainer;
}

export default withAppPageContainer;
