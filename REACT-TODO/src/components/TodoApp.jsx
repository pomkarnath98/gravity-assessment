import { useState, useEffect } from 'react';
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import Filter from './Filter.jsx';

const FILTERS = {
    all: () => true,
    completed: todo => todo.completed,
    pending: todo => !todo.completed
};

function TodoApp() {
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const isFetched = localStorage.getItem('todo-api-fetched');
        if (isFetched) return;
        fetch("https://dummyjson.com/todos")
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('todo-api-fetched', true);
                const newTodos = data.todos.map((todoData) => {
                    return { id: todoData.id, text: todoData.todo, completed: todoData.completed }
                });
                setTodos([...todos, ...newTodos]);
            })
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <AddTodo onAdd={addTodo} />
            <Filter current={filter} onChange={setFilter} />
            <div className='overflow-y-auto max-h-96'>
                <TodoList
                    todos={todos.filter(FILTERS[filter])}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                />
            </div>
        </div>
    );
}

export default TodoApp;
