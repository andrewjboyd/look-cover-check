import { connect, Dispatch } from 'react-redux';
import { finishTest } from '../../store/actions';
import WordState from '../../store/WordState';
import ResultsList from '../ResultsList';

interface IResultsListActions {
    onFinishTest: (id: string) => void;
}

const mapStateToProps = (state: WordState) => {
    return {
        testResults: state.testResults
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IResultsListActions => {
    return {
        onFinishTest() {
            dispatch(
                finishTest()
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);