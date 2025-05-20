function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className="flex justify-between items-center bg-gray-600 p-2 rounded">
            <button
                type="button"
                onClick={() => onToggle(todo.id)}
                className={`${todo.completed ? 'line-through' : ''}`}
            >
                {todo.text}
            </button>
            <button type="button" onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
        </li>
    );
}

export default TodoItem;
