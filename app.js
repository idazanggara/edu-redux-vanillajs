/*
- Store -> Tempat penyimpanan state dari seluruh aplikasi, hasilnya adalah sebuah object didalamnya terdapat action dan state
- Action -> Object yang memiliki property `type` dan `payload`
- Reducer -> Fungsi yang mengambil state/rubah saat action di dispatch
- Dispatch Fn -> Fungsi untuk menjalankan tugas action
- Middleware -> Layer atau fungsi tambahan di antara dispatching action
*/

// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         number: 0,
//     },
//     reducers: {
//         // counter/increment
//         increment: (state, action) => {
//             state.number = state.number + action.payload
//             // state.number = state.number + 1;
//         },
//         // counter/decrement
//         decrement: (state) => {
//             state.number = state.number - 1;
//         }
//     }
// });

// export const { increment, decrement } = counterSlice.actions;

// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//     }
// });

// store.subscribe(() => {
//     console.log(store.getState());
// });

// // store.dispatch({
// //     type: 'counter/increment',
// //     payload: 10,
// // })
// console.log(increment(100));
// store.dispatch(increment())

import store from "./store.js";
import TodoService from "./todoService.js";

store.subscribe(() => {
    console.log(store.getState().todo);
});

const todoService = new TodoService();

todoService.createTodo({
    id: '1',
    task: 'Mokel',
    description: 'Adil Batal Puasa astagfirullah',
    status: false,
});
todoService.getById('1');