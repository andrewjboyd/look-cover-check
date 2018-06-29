import * as React from 'react';
import { IWordTested } from '../store/WordState';
import ActionButton from './containers/WordsListButton';

export interface IWordListProps {
    words: IWordTested[];
    onStartTest: () => void;
}

export default class WordList extends React.Component<IWordListProps, {}> {
    public render() {
        return this.props.words.length === 0 ?
        <div className="emptyList">
        <div className="text-right"><button type="button" className="btn btn-primary btn-lg" disabled={true}>Start Test</button></div>
        <div>Please add words to get started</div>
        </div>
        :
        <div className="wordList">
            <div className="text-right"><button type="button" className="btn btn-primary btn-lg" onClick={this.props.onStartTest}>Start Test</button></div>
            <ul className="list-group">
                {this.props.words.map((word, idx) => {
                    return (
                        <li key={'word' + idx}
                            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">{word.word} <ActionButton id={word.word} /></li>
                    )
                })}
            </ul>
        </div>
    }
}