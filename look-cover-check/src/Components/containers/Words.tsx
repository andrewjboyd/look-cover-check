import { connect } from 'react-redux';
import WordState from '../../store/WordState';
import Words from '../Words';

const mapStateToProps = (state: WordState) => {
    return {
        testStarted: state.testStarted
    };
};

export default connect(mapStateToProps, {})(Words);