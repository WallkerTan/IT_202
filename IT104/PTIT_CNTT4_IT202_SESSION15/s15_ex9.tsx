import React, { Component } from "react";

type Todo = {
    id: string;
    title: string;
    done: boolean;
};

type State = {
    todos: Todo[];
    input: string;
    editingId: string | null; 
};

export default class s15_ex9 extends Component<{}, State> {
    private LS_KEY = "todos";

    constructor(props: {}) {
        super(props);
        const saved = localStorage.getItem(this.LS_KEY);
        this.state = {
            todos: saved ? (JSON.parse(saved) as Todo[]) : [],
            input: "",
            editingId: null,
        };
    }

    private persist(todos: Todo[]) {
        localStorage.setItem(this.LS_KEY, JSON.stringify(todos));
    }

    private validateTitle = (
        raw: string,
        editingId: string | null
    ): string | null => {
        const title = raw.trim();
        if (!title) return "Tên công việc không được để trống.";

        const isDup = this.state.todos.some(
            (t) =>
                t.title.trim().toLowerCase() === title.toLowerCase() &&
                t.id !== editingId
        );
        if (isDup) return "Tên công việc không được phép trùng.";
        return null;
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ input: e.target.value });
    };

    handleSubmit = () => {
        const { input, editingId, todos } = this.state;
        const err = this.validateTitle(input, editingId);
        if (err) {
            alert(err);
            return;
        }

        if (editingId) {
            const next = todos.map((t) =>
                t.id === editingId ? { ...t, title: input.trim() } : t
            );
            this.setState({ todos: next, input: "", editingId: null }, () =>
                this.persist(this.state.todos)
            );
        } else {
            const newItem: Todo = {
                id: Date.now().toString(),
                title: input.trim(),
                done: false,
            };
            const next = [...todos, newItem];
            this.setState({ todos: next, input: "" }, () =>
                this.persist(this.state.todos)
            );
        }
    };

    handleEdit = (id: string) => {
        const item = this.state.todos.find((t) => t.id === id);
        if (!item) return;
        this.setState({ editingId: id, input: item.title });
    };

    handleCancelEdit = () => {
        if (this.state.editingId) {
            const ok = window.confirm("Bạn có chắc muốn hủy chỉnh sửa không?");
            if (!ok) return;
        }
        this.setState({ editingId: null, input: "" });
    };

    handleDelete = (id: string) => {
        if (!window.confirm("Bạn có xác nhận xóa công việc này không?")) return;
        const next = this.state.todos.filter((t) => t.id !== id);
        this.setState({ todos: next }, () => this.persist(this.state.todos));
    };

    handleToggle = (id: string) => {
        const next = this.state.todos.map((t) =>
            t.id === id ? { ...t, done: !t.done } : t
        );
        this.setState({ todos: next }, () => this.persist(this.state.todos));
    };

    render() {
        const { todos, input, editingId } = this.state;
        const doneCount = todos.filter((t) => t.done).length;

        return (
            <div>
                <h2>Danh sách công việc</h2>

                <div>
                    <input
                        type="text"
                        placeholder="Thêm công việc mới..."
                        value={input}
                        onChange={this.handleChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") this.handleSubmit();
                            if (e.key === "Escape") this.handleCancelEdit();
                        }}
                    />
                    <button onClick={this.handleSubmit}>
                        {editingId ? "Cập nhật" : "Thêm"}
                    </button>
                    {editingId && (
                        <button onClick={this.handleCancelEdit}>Hủy</button>
                    )}
                </div>

                <div>
                    Tổng: {todos.length} — Hoàn thành: {doneCount}
                </div>

                <ul>
                    {todos.map((t) => (
                        <li key={t.id}>
                            <input
                                type="checkbox"
                                checked={t.done}
                                onChange={() => this.handleToggle(t.id)}
                            />
                            {t.done ? <s>{t.title}</s> : <span>{t.title}</span>}{" "}
                            <button onClick={() => this.handleEdit(t.id)}>
                                Sửa
                            </button>
                            <button onClick={() => this.handleDelete(t.id)}>
                                Xóa
                            </button>
                        </li>
                    ))}
                    {todos.length === 0 && <li>Chưa có công việc nào.</li>}
                </ul>
            </div>
        );
    }
}
