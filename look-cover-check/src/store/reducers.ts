import { combineReducers } from 'redux';
import { IWordAction, IWordSubmitAction } from './actions';
import { TypeKeys, WordStatus } from './constants';
import { IWordTested } from './WordState';

export const words = (state: string[] = [], action: IWordAction): string[] => {
    switch (action.type) {
        case TypeKeys.ADD_WORD:
            // Case insensitive search
            const wordAlreadyExists = state.findIndex(w => w.toLocaleLowerCase() === action.word.toLocaleLowerCase()) > -1;            

            if (!wordAlreadyExists) {
                return [...state,
                    action.word.trim()];
            }
            break;
        case TypeKeys.REMOVE_WORD:
            return state.filter(w => w !== action.word);
    }
    return state;
}

export const wordStatus = (state: WordStatus = WordStatus.WORD_INPUT, action: IWordSubmitAction) => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return WordStatus.TEST_RUNNING;
        case TypeKeys.SUBMIT_ANSWER:
            return action.remainingWordCount > 0 ? WordStatus.TEST_RUNNING : WordStatus.TEST_RESULTS;
        case TypeKeys.FINISH_TEST:
            return WordStatus.WORD_INPUT;
    }
    return state;
}

export const testResults = (state: IWordTested[] = [], action: IWordSubmitAction): IWordTested[] => {
    switch (action.type) {
        case TypeKeys.START_TEST:
            return [];
        case TypeKeys.SUBMIT_ANSWER:
            return [...state,
                { answer: action.answer, word: action.word }];
        case TypeKeys.FINISH_TEST:
            return [];
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
    wordStatus,
    words
});

export default LCCApp;