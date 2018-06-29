export interface IWordTested {
    word: string;
    answer: string;
}

export default class WordState {
    public words: string[];
    public testStarted: boolean;
    public testResults: IWordTested[];
    public initialTimerValue: number;

    constructor() {
        this.words = [];
        this.testResults = [];
    }
}