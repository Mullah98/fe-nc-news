export type Todo = {
    text: string;
    complete: boolean
}

export type TodoListProps = {
    todos: Todo[];
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export type TodoFormProps = {
    addTodo: AddTodo;
}

export type AddTodo = (newTodo: string) => void;

export type ToggleTodo = (todo: Todo) => void;

export type DeleteTodo = (todo: Todo) => void;