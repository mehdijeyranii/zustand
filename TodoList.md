# Zustand To-Do List with TypeScript

## 📌 Goal  
Create a simple **To-Do List** where users can:  
✅ Add new tasks  
✅ Remove tasks  
✅ Toggle task completion status  

---

## 1️⃣ Creating the Store with Zustand  
Create a new file `useTodoStore.ts` inside the `store` folder and add the following code:  

```ts
import { create } from "zustand";

// Define the Todo type
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the store's state
interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

// Create Zustand store
const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodoStore;
```
## 2️⃣ Creating the To-Do List Component

Create a new file `TodoList.tsx` inside the `components` folder and add the following code:

```ts
import React, { useState } from "react";
import useTodoStore from "../store/useTodoStore";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList: React.FC = () => {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText(""); // Clear input field
    }
  };
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center ">To-do List2</h2>

      {/* Input field and Add button */}
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

      {/* Task list */}
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
```
## 3️⃣ Using the Component in `App.tsx`
Now, import and use the `TodoList` component inside `App.tsx`:

```ts
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <TodoList />
    </div>
  );
};

export default App;
```

### 🛠 Features of This Exercise

✅ Add new tasks  
✅ Remove tasks  
✅ Toggle task completion by clicking on the task 

This exercise helps you understand **state management** with ***Zustand*** while also practicing useState and list handling in React.