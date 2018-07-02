import { connect, Dispatch } from 'react-redux';
import { submitAnswer } from '../../store/actions';
import WordState from '../../store/WordState';
import Test from '../Test';

interface ITestActions {
    submitAnswer: (word: string, answer: string, remainingWordCount: number) => void;
}

const mapStateToProps = (state: WordState) => {
    return {
        initialTimerValue: state.initialTimerValue,
        words: state.words.filter(w => state.testResults.findIndex(tr => tr.word.toLocaleLowerCase() === w.toLocaleLowerCase()) === -1),
    };
};

const mapDispatchToProps = (dispatch: Dispatch): ITestActions => {
    return {
        submitAnswer(word: string, answer: string, remainingWordCount: number) {
            dispatch(
                submitAnswer(word, answer, remainingWordCount)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);