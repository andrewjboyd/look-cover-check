import { combineReducers } from 'redux';
import { IWordAction, IWordSubmitAction } from './actions';
import { TypeKeys } from './constants';
import { IWordTested } from './WordState';

export const words = (state: string[] = [], action: IWordAction): string[] => {
    switch (action.type) {
        case TypeKeys.ADD_WORD:
            // Case insensitive search
            const wordAlreadyExists = state.findIndex(w => w.toLocaleLowerCase() === action.word.toLocaleLowerCase()) > -1;            

            if (!wordAlreadyExists) {
                return [...state,
                    action.word];
            }
            break;
        case TypeKeys.REMOVE_WORD:
            return state.filter(w => w !== action.word);
    }
    return state;
}

export const testStarted = (state: boolean = false, action: IWordSubmitAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return true;
        case TypeKeys.SUBMIT_WORD:
            return action.remainingWordCount > 0;
    }
    return state;
}

export const testResults = (state: IWordTested[] = [], action: IWordSubmitAction): IWordTested[] => {
    switch (action.type) {
        case TypeKeys.SUBMIT_WORD:
            return [...state,
                { answer: action.answer, word: action.word }];
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
    testResults,
    testStarted,
    words
});

export default LCCApp;