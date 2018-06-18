import * as React from 'react';

export interface IWordListProps {
    words: string[];
    onDelete: (word: string) => void;
}

export default class WordList extends React.Component<IWordListProps, {}> {
    public render() {
        return this.props.words.length === 0 ?
        <div className="emptyList">Please add words to get started</div> :
        <div className="wordList">
            <ul className="list-group">
                {this.props.words.map((word, idx) => {
                    return (
                        <li key={'word' + idx}
                            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">{word}
                            <span className="far fa-trash-alt hover" onClick={this.props.onDelete.bind(this, word)} /></li>
                    )
                })}
            </ul>
        </div>
    }
}