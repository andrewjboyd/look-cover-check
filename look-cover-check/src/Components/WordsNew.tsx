import * as React from 'react';

export interface IWordsNewProps {
    onAdd: (word: string) => void;
}

export interface IWordsNewState {
    newWord: string;
}

export default class WordsNew extends React.Component<IWordsNewProps, IWordsNewState> {

    constructor(props: IWordsNewProps) {
        super(props);

        this.addClick = this.addClick.bind(this);
        this.newWordChange = this.newWordChange.bind(this);
    }

    public render() {
        return <div className="addRow">
            <form className="form-inline">
                <input type="textbox" id="word" onChange={this.newWordChange} className="form-control" /> <button type="button" className="btn btn-secondary" onClick={this.addClick}>Add</button>
            </form>
        </div>;
    }

    private addClick(target: React.MouseEvent<HTMLElement>) {
        if (this.props.onAdd) {
            this.props.onAdd(this.state.newWord);
        }
    }

    private newWordChange(target: React.FormEvent<HTMLInputElement>) {
        this.setState({
            newWord: target.currentTarget.value
        });
    }
}