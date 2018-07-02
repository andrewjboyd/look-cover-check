import * as React from 'react';
import { WordStatus } from '../store/constants';
import ResultsList from './containers/ResultsList';
import Test from './containers/Test';
import WordList from './containers/WordsList';
import WordsNew from './containers/WordsNew';

export interface IWordsProps {
    wordStatus: WordStatus;
}

export default class Words extends React.Component<IWordsProps, {}> {
    public render() {
        switch (this.props.wordStatus) {
            case WordStatus.TEST_RUNNING:
                return <Test />
            case WordStatus.TEST_RESULTS:
                return <ResultsList />;
            default:
                return <div className="content">
                            <h1>Word List</h1>
                            <WordsNew />
                            <WordList />
                        </div>;    
        }
    }
}