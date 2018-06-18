import { connect, Dispatch } from 'react-redux';
import { removeWord } from '../../store/actions';
import WordState from '../../store/WordState';
import WordsList from '../WordsList';

const mapStateToProps = (state: WordState) => {
    return {
        words: state.words
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onDelete(word: string) {
            dispatch(
                removeWord(word)
            );
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsList);