import { createSlice } from '@reduxjs/toolkit';

export const sliceTodo = createSlice({
    name: 'todo',
    initialState: {
        todos: [],
        todo: null,
    },
    reducers: {
        add: (state, { payload }) => {
            state.todos.push(payload);
        },
        getById: (state, { payload }) => {
            const todo = state.todos.find(todo => todo.id === payload);
            state.todo = todo;
        },
        update: (state, { payload }) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return { ...payload }
                }
                return todo;
            })
        },
        deleteById: (state, { payload }) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
        }
    }
});

export const { add, getById, update, deleteById } = sliceTodo.actions;