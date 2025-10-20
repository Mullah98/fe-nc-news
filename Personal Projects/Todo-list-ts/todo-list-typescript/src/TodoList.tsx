import React from 'react';
import { TodoListProps } from './Types';

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo}) => {
    return (
        <div className='todo-list'>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <label style={{textDecoration: todo.complete ? 'line-through' : 'none'}}>
                            <input type='checkbox' checked={todo.complete} onChange={() => toggleTodo(todo)}></input>
                            {todo.text}
                        </label>
                        <button className='delete-btn' onClick={() => deleteTodo(todo)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}