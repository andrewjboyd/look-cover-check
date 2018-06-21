import { connect, Dispatch } from 'react-redux';
import { removeWord } from '../../store/actions';
import WordState from '../../store/WordState';
import ActionButton from '../ActionButton';

interface IOwnProps {
    id: string;
}

interface IActionButtonProps {
    Test: string;
}

interface IActionButtonActions {
    onClick: (id: string) => void;
}

const mapStateToProps = (state: WordState, props: IOwnProps): IActionButtonProps => {
    return {
        Test: props.id
    };
};

const mapDispatchToProps = (dispatch: Dispatch): IActionButtonActions => {
    return {
        onClick(word: string) {
            dispatch(
                removeWord(word)
            );
        }
    };
};

export default connect<IActionButtonProps, IActionButtonActions, IOwnProps, WordState>(mapStateToProps, mapDispatchToProps)(ActionButton);