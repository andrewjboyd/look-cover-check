import { createStore } from 'redux';
import appReducers from './reducers';
import WordState from './WordState';

const lccWords = "LCC_Words"

const initialState = localStorage[lccWords] ?
    JSON.parse(localStorage[lccWords]) : new WordState();

const store = createStore(appReducers, initialState);

store.subscribe(() => {
    const state = JSON.stringify(store.getState());
    localStorage[lccWords] = state;
});

export default store;