export interface IWordTested {
    word: string;
    answer: string;
}

export default class WordState {
    public words: string[];
    public testStarted: boolean;
    public testWords: IWordTested[];
    public initialTimerValue: number;

    constructor() {
        this.words = [];
        this.testWords = [];
    }
}