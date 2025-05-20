import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full"
        placeholder="Add a task"
      />
    </form>
  );
}

export default AddTodo;
