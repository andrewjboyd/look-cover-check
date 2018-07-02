import { connect } from 'react-redux';
import WordState from '../../store/WordState';
import Words from '../Words';

const mapStateToProps = (state: WordState) => {
    return {
        wordStatus: state.wordStatus
    };
};

export default connect(mapStateToProps, {})(Words);