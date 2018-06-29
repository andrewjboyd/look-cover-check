import * as React from 'react';
import { TestStatus } from '../store/constants';
import { IWordTested } from '../store/WordState';

export interface ITestProps {
    initialTimerValue: number;
    words: IWordTested[];
    submitWord: (word: string, answer: string, remainingWordCount: number) => void;
}

interface ITestState {
    words: IWordTested[];
    timerValue: number;
    word: string;
    answer: string;
    status: TestStatus;
}

class Test extends React.Component<ITestProps, ITestState> {
    constructor(props: ITestProps) {
        super(props);

        const word = props.words[this.randomIndex(props.words)].word;

        this.state = { timerValue: props.initialTimerValue, status: TestStatus.LOOK, words: props.words.filter(w => w.word !== word), word, answer: '' };
        this.decrementTimer = this.decrementTimer.bind(this);
        this.readyClick = this.readyClick.bind(this);
        this.wordChange = this.wordChange.bind(this);
        this.checkClick = this.checkClick.bind(this);
    }

    public componentDidMount() {
        setTimeout(this.decrementTimer, 1000);
    }

    public componentDidUpdate() {
        if (this.state.timerValue > 0) {
            setTimeout(this.decrementTimer, 1000);
        }
    }

    public render() {
        if (this.state.timerValue > 0) {
            return <div className="counter">{this.state.timerValue}</div>;
        }

        switch (this.state.status)
        {
            case TestStatus.LOOK:
                return <div>
                        <div className="look">{this.state.word}</div>
                        <button type="button" onClick={this.readyClick} className="btn btn-primary btn-lg">I'm ready</button>
                    </div>;
            default:
                return <div>
                    <form className="form-inline">
                        <input type="textbox" id="word" onChange={this.wordChange} className="form-control" /> <button type="button" className="btn btn-secondary" onClick={this.checkClick}>Check</button>
                    </form>
                </div>;
        }
    }

    private readyClick() {
        this.setState({ status: TestStatus.CHECK, timerValue: this.props.initialTimerValue, answer: '' });
    }

    private decrementTimer() {
        const value: number = this.state.timerValue - 1;
        this.setState({ timerValue: value });
    }

    private wordChange(target: React.FormEvent<HTMLInputElement>) {
        this.setState({
            answer: target.currentTarget.value
        });
    }

    private randomIndex(words: IWordTested[])
    {
        return Math.floor(Math.random() * words.length);
    }

    private checkClick() {
        this.props.submitWord(this.state.word, this.state.answer, this.state.words.length - 1);

        const word = this.state.words[this.randomIndex(this.state.words)].word;
        this.setState({            
            answer: '',
            status: TestStatus.LOOK,
            timerValue: this.props.initialTimerValue,
            word,
            words: this.state.words.filter(w => w.word === word),
        });
    }
}

export default Test;