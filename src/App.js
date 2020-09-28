import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoInput, addTodos } from "./store/reducers/todos";


function App() {
    const { todos } = useSelector((store) => {
        return store;
    });
    const dispatch = useDispatch();
    const handleSearchInput = ({ target: { value } }) => {
        dispatch(todoInput(value));
    };
    const handleAddTodos = () => {
        dispatch(addTodos());
    }
    return (
        <div>
            <h1>Redux</h1>
            <input
                placeholder="add new todo"
                value={todos.todoInput}
                onChange={handleSearchInput}
            />
            <button onClick={handleAddTodos}>Add</button>
            <p>{todos.newTodo}</p>
            <ul>
                {todos.data.map((item) => <li key={item}>{item}</li>)}
            </ul>

        </div>
    )
}

export default App;
