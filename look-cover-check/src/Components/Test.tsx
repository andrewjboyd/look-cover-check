import * as React from 'react';
import { TestStatus } from '../store/constants';

export interface ITestProps {
    initialTimerValue: number;
    words: string[];
    submitAnswer: (word: string, answer: string, remainingWordCount: number) => void;
}

interface ITestState {
    words: string[];
    timerValue: number;
    word: string;
    answer: string;
    status: TestStatus;
}

class Test extends React.Component<ITestProps, ITestState> {
    constructor(props: ITestProps) {
        super(props);

        const word = props.words[this.randomIndex(props.words.length)];

        this.state = { timerValue: props.initialTimerValue, status: TestStatus.LOOK, words: props.words.filter(w => w !== word), word, answer: '' };
        this.decrementTimer = this.decrementTimer.bind(this);
        this.readyClick = this.readyClick.bind(this);
        this.wordChange = this.wordChange.bind(this);
        this.checkClick = this.checkClick.bind(this);
    }

    public componentDidMount() {
        if (this.state.timerValue > 0) {
            setTimeout(this.decrementTimer, 1000);
        }
    }

    public componentDidUpdate() {
        if (this.state.timerValue > 0) {
            setTimeout(this.decrementTimer, 1000);
        }
    }

    public render() {
        if (this.state.timerValue > 0) {
            return <div className="counter"><span>{this.state.timerValue}</span></div>;
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
                        <input type="textbox" id="word" onChange={this.wordChange} className="form-control" autoComplete="off" /> <button type="button" className="btn btn-secondary" onClick={this.checkClick}>Submit</button>
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

    private randomIndex(length: number)
    {
        return Math.floor(Math.random() * length);
    }

    private checkClick() {
        this.props.submitAnswer(this.state.word, this.state.answer, this.state.words.length);

        const word = this.state.words[this.randomIndex(this.state.words.length)];
        this.setState({            
            answer: '',
            status: TestStatus.LOOK,
            timerValue: this.props.initialTimerValue,
            word,
            words: this.state.words.filter(w => w !== word),
        });
    }
}

export default Test;