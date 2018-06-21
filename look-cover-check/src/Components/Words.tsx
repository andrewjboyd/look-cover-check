import * as React from 'react';
import WordList from './containers/WordsList';
import WordsNew from './containers/WordsNew';

export default class Words extends React.Component<{}, {}> {

    public render() {
        return <div className="content">
            <h1>Word List</h1>
            <WordsNew />
            <WordList />
        </div>;
    }
}