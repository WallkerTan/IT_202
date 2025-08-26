import React, { useState, useEffect } from "react";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem("todos");
        return stored ? JSON.parse(stored) : [];
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (!input.trim()) {
            alert("Tên công việc không được để trống!");
            return;
        }
        setTodos([
            ...todos,
            { id: Date.now(), title: input, completed: false },
        ]);
        setInput("");
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    const deleteTodo = (id: number) => {
        if (window.confirm("Bạn có chắc muốn xóa công việc này?")) {
            setTodos(todos.filter((t) => t.id !== id));
        }
    };

    const editTodo = (id: number) => {
        const newTitle = prompt("Nhập tên công việc mới:");
        if (newTitle && newTitle.trim()) {
            setTodos(
                todos.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
            );
        } else {
            alert("Tên công việc không được để trống!");
        }
    };

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập tên công việc"
            />
            <button onClick={addTodo}>Thêm</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => editTodo(todo.id)}>✏️</button>
                        <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
                    </li>
                ))}
            </ul>

            <p>
                Công việc đã hoàn thành:{" "}
                {todos.filter((t) => t.completed).length}/{todos.length}
            </p>
        </div>
    );
};

export default TodoApp;
