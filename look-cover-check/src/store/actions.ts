import { Action } from 'redux';
import { TypeKeys } from './constants';

export class WordAction implements Action {
    public type: string;
    public word: string;
}

export function addWord(word: string): WordAction {
    return {
        type: TypeKeys.ADD_WORD,
        word
    };
}

export function removeWord(word: string): WordAction {
    return {
        type: TypeKeys.REMOVE_WORD,
        word
    }
}