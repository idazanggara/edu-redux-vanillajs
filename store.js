import { configureStore } from '@reduxjs/toolkit';
import { sliceTodo } from './sliceTodo.js';

const store = configureStore({
    reducer: {
        todo: sliceTodo.reducer,
    }
})

export default store;