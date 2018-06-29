import { connect, Dispatch } from 'react-redux';
import { startTest } from '../../store/actions';
import WordState from '../../store/WordState';
import WordsList from '../WordsList';

interface IWordListActions {
    onStartTest: (id: string) => void;
}

const mapStateToProps = (state: WordState) => {
    return {
        words: state.words
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IWordListActions => {
    return {
        onStartTest() {
            dispatch(
                startTest()
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);