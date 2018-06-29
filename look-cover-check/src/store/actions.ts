import { Action } from 'redux';
import { TypeKeys } from './constants';

export interface IWordAction extends Action {
    type: string;
    word: string;
}

export interface IWordSubmitAction extends IWordAction {
    answer: string;
    remainingWordCount: number
}

export function addWord(word: string): IWordAction {
    return {
        type: TypeKeys.ADD_WORD,
        word
    };
}

export function removeWord(word: string): IWordAction {
    return {
        type: TypeKeys.REMOVE_WORD,
        word
    }
}

export function startTest() {
    return {
        type: TypeKeys.START_TEST
    }
}

export function submitWord(word: string, answer: string, remainingWordCount: number): IWordSubmitAction {
    return {
        answer,
        remainingWordCount,
        type: TypeKeys.SUBMIT_WORD,
        word,
    }
}