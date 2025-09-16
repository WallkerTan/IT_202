import React, { Component } from "react";
import "./../../App.css";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type AppState = {
    tasks: Task[];
    showModal: boolean;
    isEditing: boolean;
    currentTask: Task | null;
    newTitle: string;
    error: string;
};

export default class EX9 extends Component<object, AppState> {
    state: AppState = {
        tasks: [],
        showModal: false,
        isEditing: false,
        currentTask: null,
        newTitle: "",
        error: "",
    };

    handleOpenModal = (task?: Task) => {
        if (task) {
            this.setState({
                isEditing: true,
                currentTask: task,
                newTitle: task.title,
                showModal: true,
                error: "",
            });
        } else {
            this.setState({
                isEditing: false,
                currentTask: null,
                newTitle: "",
                showModal: true,
                error: "",
            });
        }
    };

    handleCloseModal = () => {
        this.setState({ showModal: false, error: "" });
    };

    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newTitle: e.target.value });
    };

    handleSaveTask = () => {
        const { newTitle, tasks, isEditing, currentTask } = this.state;

        if (!newTitle.trim()) {
            this.setState({ error: "Vui lòng nhập tên công việc!" });
            return;
        }

        if (isEditing && currentTask) {
            const updatedTasks = tasks.map((t) =>
                t.id === currentTask.id ? { ...t, title: newTitle } : t
            );
            this.setState({ tasks: updatedTasks, showModal: false });
        } else {
            const newTask: Task = {
                id: Date.now(),
                title: newTitle,
                completed: false,
            };
            this.setState({ tasks: [...tasks, newTask], showModal: false });
        }
    };

    handleDeleteTask = (id: number) => {
        const updatedTasks = this.state.tasks.filter((task) => task.id !== id);
        this.setState({ tasks: updatedTasks });
    };

    handleToggleComplete = (id: number) => {
        const updatedTasks = this.state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        this.setState({ tasks: updatedTasks });
    };

    render() {
        const { tasks, showModal, newTitle, isEditing, error } = this.state;

        return (
            <div className="app-container">
                <h2>Danh sách công việc</h2>
                <button
                    className="btn-add"
                    onClick={() => this.handleOpenModal()}
                >
                    Thêm
                </button>
                <ul className="task-list">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={task.completed ? "completed" : ""}
                        >
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() =>
                                    this.handleToggleComplete(task.id)
                                }
                            />
                            <span>{task.title}</span>
                            <button
                                className="btn-edit"
                                onClick={() => this.handleOpenModal(task)}
                            >
                                ✏
                            </button>
                            <button
                                className="btn-delete"
                                onClick={() => this.handleDeleteTask(task.id)}
                            >
                                🗑
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Modal */}
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <h3>
                                {isEditing
                                    ? "Cập nhật công việc"
                                    : "Thêm công việc"}
                            </h3>
                            <input
                                type="text"
                                value={newTitle}
                                onChange={this.handleInputChange}
                                placeholder="Nhập tên công việc..."
                            />
                            {error && <p className="error">{error}</p>}
                            <div className="modal-actions">
                                <button onClick={this.handleSaveTask}>
                                    {isEditing ? "Cập nhật" : "Thêm"}
                                </button>
                                <button onClick={this.handleCloseModal}>
                                    Hủy
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
