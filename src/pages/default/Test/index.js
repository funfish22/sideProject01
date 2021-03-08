import TestPageContainer from '@serviceCenter/containers/Test';

function CreditPage(props) {
    const { switch123 } = props;

    console.log('switch123', switch123);

    return switch123 && <div>123</div>;
}

const TestPage = TestPageContainer({
    Component: CreditPage,
});

export default TestPage;
