import withCalendarPageContainer from '@serviceCenter/containers/Calendar/CalendarPageContainer';

function CalendarPage() {
    return <div>Calendar</div>;
}

const CalendarPageWrapperWithContainer = withCalendarPageContainer({
    Component: CalendarPage,
});

export default CalendarPageWrapperWithContainer;
