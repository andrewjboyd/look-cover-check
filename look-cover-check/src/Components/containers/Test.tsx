import { connect, Dispatch } from 'react-redux';
import { submitWord } from '../../store/actions';
import WordState from '../../store/WordState';
import Test from '../Test';

interface ITestActions {
    submitWord: (word: string, answer: string, remainingWordCount: number) => void;
}

const mapStateToProps = (state: WordState) => {
    return {
        initialTimerValue: state.initialTimerValue,
        words: state.words,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): ITestActions => {
    return {
        submitWord(word: string, answer: string, remainingWordCount: number) {
            dispatch(
                submitWord(word, answer, remainingWordCount)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);