export enum TypeKeys {
    // Add word to list
    ADD_WORD = 'ADD_WORD',
    // Remove word from list
    REMOVE_WORD = 'REMOVE_WORD',
    // Start the test
    START_TEST = 'START_TEST',
    // Word submitted by user
    SUBMIT_WORD = 'SUBMIT_WORD',
};

export enum TestStatus {
    LOOK = 'LOOK',
    CHECK = 'CHECK',
};

export enum WordStatus {
    WORD_INPUT = 'WORD_INPUT',
    TEST_RUNNING = 'TEST_RUNNING',
    TEST_RESULTS = 'TEST_RESULTS',
}