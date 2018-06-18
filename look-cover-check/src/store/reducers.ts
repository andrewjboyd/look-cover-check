import { combineReducers } from 'redux';
import { WordAction } from './actions';
import { TypeKeys } from './constants';

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

const LCCApp = combineReducers({
    words
});

export default LCCApp;