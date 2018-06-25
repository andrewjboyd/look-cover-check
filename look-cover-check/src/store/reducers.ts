import { combineReducers } from 'redux';
import { WordAction } from './actions';
import { TypeKeys } from './constants';
import { IWordTested } from './WordState';

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

export const testStarted = (state: boolean = false, action: WordAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return true;             
    }
    return state;
}

export const testTimer = (state: number = 3, action: WordAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return 3;
    }
    return state;
}

export const testWords = (state: IWordTested[] = [], action: WordAction): IWordTested[] => {
    switch (action.type) {
        case TypeKeys.ADD_WORD:
            let hasWord = false;
            state.forEach(word => {
                for (const key in word)
                {
                    if (key.toLocaleLowerCase() === action.word.toLocaleLowerCase())
                    {
                        hasWord = true;
                    }
                }
            });

            if (!hasWord) {
                return [...state,
                    { word: action.word, answer: ''}];
            }
            break;
        case TypeKeys.REMOVE_WORD:
            return state.filter(w => w.word.toLocaleLowerCase() !== action.word.toLocaleLowerCase());;
    }
    return state;
}

const LCCApp = combineReducers({
    testStarted,
    testTimer,
    testWords,
    words
});

export default LCCApp;