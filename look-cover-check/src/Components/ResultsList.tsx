import * as React from 'react';
import { IWordTested } from '../store/WordState';

export interface IResultsListProps {
    testResults: IWordTested[];
    onFinishTest: () => void;
}

export default class ResultsList extends React.Component<IResultsListProps, {}> {
    public render() {
        return <div className="wordList">
            <div className="text-right"><button type="button" className="btn btn-primary btn-lg" onClick={this.props.onFinishTest}>Finish</button></div>
            <ul className="list-group">
                {this.props.testResults.map((a, idx) => {
                    const correct = a.word.toLocaleLowerCase() === a.answer.toLocaleLowerCase();

                    return (
                        <li key={'result' + idx}
                            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">{a.answer}
                            {correct ? '' : ' (' + a.word + ')'}
                            {correct ? <i style={{ color: 'green' }} className="fas fa-check" /> : <i style={{ color: 'red' }} className="fas fa-times" />}</li>
                    )
                })}
            </ul>
        </div>
    }
}