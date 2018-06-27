import { connect } from 'react-redux';
// import { startTest } from '../../store/actions';
import WordState from '../../store/WordState';
import Test from '../Test';

 /*
interface IWordListActions {
    onStartTest: (id: string) => void;
}
*/
const mapStateToProps = (state: WordState) => {
    return {
        initialTimerValue: state.initialTimerValue
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

export default connect(mapStateToProps, {})(Test);