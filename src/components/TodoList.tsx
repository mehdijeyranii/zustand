import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center ">To-do List2</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded bg-gray-50/5"
          placeholder="Enter new job..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border rounded ${
              todo.completed ? "bg-gray-50/10" : ""
            }`}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`cursor-pointer ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              className="px-2 py-1 bg-rose-500 text-white rounded flex justify-center items-center gap-1"
              onClick={() => removeTodo(todo.id)}
            >
              <AiOutlineDelete /> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
