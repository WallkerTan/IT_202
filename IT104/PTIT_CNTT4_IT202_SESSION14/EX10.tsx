import React, { Component } from "react";

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type State = {
    tasks: Task[];
    completedTasks: Task[];
    currentTask: string;
    editingTask: Task | null;
    showModal: boolean;
};
export default class EX10 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            tasks: [
                { id: 1, title: "Học React", completed: false },
                { id: 2, title: "Làm bài tập", completed: false },
            ],
            completedTasks: [],
            currentTask: "",
            editingTask: null,
            showModal: false,
        };
    }

    // Thêm công việc mới
    addTask = () => {
        const { currentTask, tasks } = this.state;
        if (currentTask.trim() === "") return;

        const newTask: Task = {
            id: Date.now(),
            title: currentTask,
            completed: false,
        };

        this.setState({
            tasks: [...tasks, newTask],
            currentTask: "",
        });
    };

    // Mở modal chỉnh sửa
    openEditModal = (task: Task) => {
        this.setState({ editingTask: task, showModal: true });
    };

    // Đóng modal
    closeModal = () => {
        this.setState({ showModal: false, editingTask: null });
    };

    // Lưu chỉnh sửa
    saveEdit = () => {
        const { editingTask, tasks } = this.state;
        if (!editingTask) return;

        const updatedTasks = tasks.map((task) =>
            task.id === editingTask.id ? editingTask : task
        );

        this.setState({
            tasks: updatedTasks,
            showModal: false,
            editingTask: null,
        });
    };

    // Tick vào checkbox → hoàn thành công việc
    toggleComplete = (task: Task) => {
        const updatedTasks = this.state.tasks.map((t) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
        );

        const completed = updatedTasks.filter((t) => t.completed);
        this.setState({ tasks: updatedTasks, completedTasks: completed });
    };

    render() {
        const { tasks, completedTasks, currentTask, editingTask, showModal } =
            this.state;

        return (
            <div className="container">
                <h1>Danh sách công việc</h1>
                <div className="input-group">
                    <input
                        type="text"
                        value={currentTask}
                        onChange={(e) =>
                            this.setState({ currentTask: e.target.value })
                        }
                        placeholder="Nhập công việc..."
                    />
                    <button onClick={this.addTask}>Thêm</button>
                </div>

                <ul className="task-list">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => this.toggleComplete(task)}
                            />
                            <span className={task.completed ? "completed" : ""}>
                                {task.title}
                            </span>
                            <button onClick={() => this.openEditModal(task)}>
                                ✏️
                            </button>
                        </li>
                    ))}
                </ul>

                {completedTasks.length > 0 && (
                    <>
                        <h2>Hoàn thành công việc</h2>
                        <ul className="completed-list">
                            {completedTasks.map((task) => (
                                <li key={task.id}>{task.title}</li>
                            ))}
                        </ul>
                    </>
                )}

                {showModal && editingTask && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Cập nhật công việc</h2>
                            <input
                                type="text"
                                value={editingTask.title}
                                onChange={(e) =>
                                    this.setState({
                                        editingTask: {
                                            ...editingTask,
                                            title: e.target.value,
                                        },
                                    })
                                }
                            />
                            <div className="modal-buttons">
                                <button onClick={this.saveEdit}>
                                    Cập nhật
                                </button>
                                <button onClick={this.closeModal}>Đóng</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
