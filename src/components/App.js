import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleCompleted } from '../redux/actions';
import { Form } from './Form';
import { List } from './List';

const App = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos);

    const submitHandler = (e) => {
        e.preventDefault();
        const todoText = e.target.elements.todoInput.value;
        dispatch(addTodo(todoText));
        e.target.reset();
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const toggleCompletedHandler = (id) => {
        dispatch(toggleCompleted(id));
    };

    return (
        <>
            <List list={todoList} onClickHandler={toggleCompletedHandler} onDelete={handleDelete} />
            <Form submitHandler={submitHandler} />
        </>
    );
};

export default App;

