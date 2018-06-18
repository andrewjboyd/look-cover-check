import { connect, Dispatch } from 'react-redux';
import { addWord } from '../../store/actions';
import WordState from '../../store/WordState';
import WordsNew from '../WordsNew';

const mapStateToProps = (state: WordState) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAdd(word: string) {
            dispatch(
                addWord(word)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsNew)