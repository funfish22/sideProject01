import hoistNonReactStatic from 'hoist-non-react-statics';

function withCalendarPageContainer({ Component }) {
    function CalendarPageContainer() {
        return <Component />;
    }

    hoistNonReactStatic(CalendarPageContainer, withCalendarPageContainer);
    return CalendarPageContainer;
}

export default withCalendarPageContainer;
