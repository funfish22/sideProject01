import withPageNotFoundPageContainer from '@serviceCenter/containers/PageNotFound/PageNotFoundPageContainer';

function PageNotFoundPage() {
    return <div>page not found</div>;
}

const PageNotFoundPageWrapperWithContainer = withPageNotFoundPageContainer({
    Component: PageNotFoundPage,
});

export default PageNotFoundPageWrapperWithContainer;
