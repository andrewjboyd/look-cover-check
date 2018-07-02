import { WordStatus } from './constants';

export interface IWordTested {
    word: string;
    answer: string;
}

export default class WordState {
    public words: string[];
    public wordStatus: WordStatus;
    public testResults: IWordTested[];
    public initialTimerValue: number;

    constructor() {
        this.words = [];
        this.testResults = [];
    }
}