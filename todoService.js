import store from "./store.js";
import { add, getById, update, deleteById } from './sliceTodo.js';

export default class TodoService {
    createTodo = (todo) => {
        store.dispatch(add(todo))
    }

    getAll = () => {
        return store.getState().todo.todos;
    }

    getById = (id) => {
        store.dispatch(getById(id));
        return store.getState().todo.todo
    }

    update = (newTodo) => {
        store.dispatch(update(newTodo))
    }

    deleteById = (id) => {
        store.dispatch(deleteById(id))
    }
}