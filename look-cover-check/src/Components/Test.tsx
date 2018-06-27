import * as React from 'react';

export interface ITestProps {
    initialTimerValue: number
}

interface ITestState {
    timerValue: number;
}

class Test extends React.Component<ITestProps, ITestState> {
    constructor(props: ITestProps) {
        super(props);

        this.state = { timerValue: props.initialTimerValue };
        this.decrementTimer = this.decrementTimer.bind(this);
    }

    public componentDidMount() {
        setTimeout(this.decrementTimer, 1000);
    }

    public componentDidUpdate() {
        setTimeout(this.decrementTimer, 1000);
    }

    public render() {
        return (
            this.state.timerValue > 0 ?
            <div className="counter">{this.state.timerValue}</div>
            :
            <div>Test begining</div>
        );
    }

    private decrementTimer() {
        const value: number = this.state.timerValue - 1;
        this.setState({ timerValue: value });
    }
}

export default Test;