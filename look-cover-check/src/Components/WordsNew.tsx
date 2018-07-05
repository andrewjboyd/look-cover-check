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

        this.state = { newWord: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.newWordChange = this.newWordChange.bind(this);
    }

    public render() {
        return <div className="addRow">
            <form onSubmit={this.onSubmit} id="newForm">
                <div className="form-group">
                    <div className="col-sm-5">Please enter the spelling words you wish to be tested on:</div>
                    <div className="col-sm-5"><input type="textbox" id="word" autoFocus={true} value={this.state.newWord} onChange={this.newWordChange} className="form-control" autoComplete="off" required={true} /></div>
                </div>
                <div className="col-sm-2"><button type="submit" className="btn btn-secondary">Add</button></div>
            </form>
        </div>;
    }

    private onSubmit(e: React.FormEvent<HTMLFormElement>) {
        if (!e.isDefaultPrevented()) {
            e.preventDefault();
            this.props.onAdd(this.state.newWord);
            this.setState({
                newWord: ''
            });
        }
    }

    private newWordChange(target: React.FormEvent<HTMLInputElement>) {
        this.setState({
            newWord: target.currentTarget.value
        });
    }
}