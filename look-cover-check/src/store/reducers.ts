import { combineReducers } from 'redux';
import { WordAction } from './actions';
import { TypeKeys } from './constants';
import WordState from './WordState';

export const words = (state: string[] = [], action: WordAction) => {
    switch (action.type) {
        case TypeKeys.ADD_WORD:
            const hasWord = state.some(w => w.toLocaleLowerCase() === action.word.toLocaleLowerCase())
            if (!hasWord) {
                return [...state,
                    action.word
                ];
            }
            break;
        case TypeKeys.REMOVE_WORD:
            return state.filter(w => w.toLocaleLowerCase() !== action.word.toLocaleLowerCase());
    }
    return state;
}

export const test = (state: WordState = new WordState(), action: WordAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            state.testStarted = true;             
            break;        
    }
    return state;
}

const LCCApp = combineReducers({
    test,
    words
});

export default LCCApp;