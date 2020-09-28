import { createSlice } from "@reduxjs/toolkit";

const {
    reducer,
    actions: { todoInput, addTodos },
} = createSlice({
    name: "todos",
    initialState: {
        newTodo: "",
        data: ["Hello", "Buongiorno"]
    },
    reducers: {
        todoInput(state, { payload }) {
            return {
                ...state,
                newTodo: payload,
            };
        },
        addTodos(state) {
            return {
                ...state,
                data: [...state.data, state.newTodo],

            };
        }
    }

});

export { todoInput, addTodos };
export default reducer;
