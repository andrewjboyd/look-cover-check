import * as React from 'react';
import WordList from './containers/WordsList';
import WordsNew from './containers/WordsNew';
import Test from './Test';

export interface IWordsProps {
    testStarted: boolean
}

export default class Words extends React.Component<IWordsProps, {}> {
    public render() {
        return this.props.testStarted ?
        <Test />
        :
        <div className="content">
            <h1>Word List</h1>
            <WordsNew />
            <WordList />
        </div>;
    }
}