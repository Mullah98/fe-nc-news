import React, { ChangeEvent, FormEvent, useState } from 'react';
import { TodoFormProps } from './Types';

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo)
        setNewTodo("")
    }

    return (
        <div className='todo-form'>
            <input type='text' placeholder='I need to...' value={newTodo} onChange={handleChange}></input>
            <button onClick={handleSubmit}>Add task</button>   
        </div>
    )
}