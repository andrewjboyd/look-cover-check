import { connect } from 'react-redux';
// import { startTest } from '../../store/actions';
import WordState from '../../store/WordState';
import Words from '../Words';

 /*
interface IWordListActions {
    onStartTest: (id: string) => void;
}
*/
const mapStateToProps = (state: WordState) => {
    return {
        testStarted: state.testStarted
    };
};

/*
const mapDispatchToProps = (dispatch: Dispatch): IWordListActions => {
    return {
        onStartTest() {
            dispatch(
                startTest()
            );
        }
    };
};
*/

export default connect(mapStateToProps, {})(Words);