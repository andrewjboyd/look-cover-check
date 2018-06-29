import { combineReducers } from 'redux';
import { IWordAction, IWordSubmitAction } from './actions';
import { TypeKeys } from './constants';
import { IWordTested } from './WordState';

export const testStarted = (state: boolean = false, action: IWordSubmitAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return true;
        case TypeKeys.SUBMIT_WORD:
            return action.remainingWordCount > 0;
    }
    return state;
}

export const testWords = (state: IWordTested[] = [], action: IWordSubmitAction): IWordTested[] => {
    switch (action.type) {
        case TypeKeys.ADD_WORD:
            // Case insensitive search
            const hasWord = state.findIndex(w => w.word.toLocaleLowerCase() === action.word.toLocaleLowerCase()) > -1;            

            if (!hasWord) {
                return [...state,
                    { word: action.word, answer: ''}];
            }
            break;
        case TypeKeys.REMOVE_WORD:
            return state.filter(w => w.word !== action.word);
        case TypeKeys.SUBMIT_WORD:
            const item = { answer: action.answer, word: action.word }
            const wordIndex = state.findIndex(w => w.word === action.word);
            state[wordIndex] = item;
            break;
    }
    return state;
}

export const initialTimerValue = (state: number = 3, action: IWordAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return 3;
    }
    return state;
}

const LCCApp = combineReducers({
    initialTimerValue,
    testStarted,
    testWords,
});

export default LCCApp;