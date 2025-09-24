/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store/stores';
import type { Priority, Task } from './types/listType';
import { addTask, deleteTask, getTasks, toggleTask, updateTask } from './store/taskSlice';




// --- COMPONENT CHÍNH ---
const App: React.FC = () => {
  // State quản lý danh sách công việc
  const tasks = useSelector((state: RootState) => state.task || [])

  // State quản lý các trường input cho công việc mới
  const [newTaskText, setNewTaskText] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState<Priority>('Cao');
  const [taskUpdate, setTaskUpdate] = useState<Task | null>(null);
  const dispatch : any = useDispatch();
  // State quản lý các bộ lọc
  const [filters, setFilters] = useState({
    status: 'Tất cả',
    priority: 'Tất cả',
    searchTerm: '',
  });

  // useEffect(() => {

  // }, [dispatch])
  // // Hàm xử lý thêm công việc mới

  useEffect(()=>{
    dispatch(getTasks())
  }, [])
  // Lọc danh sách công việc dựa trên state `filters`
  const filteredTasks = useMemo(() => {
  return tasks.filter(task => {
    const statusMatch =
      filters.status === 'Tất cả' ||
      (filters.status === 'Hoàn thành' && task.completed) ||
      (filters.status === 'Chưa hoàn thành' && !task.completed);

    const priorityMatch =
      filters.priority === 'Tất cả' || task.priority === filters.priority;

    const searchTerm = filters.searchTerm.trim().toLowerCase();
    const searchTermMatch =
      searchTerm === '' ||
      task.taskName.toLowerCase().includes(searchTerm);

    return statusMatch && priorityMatch && searchTermMatch;
  });
}, [tasks, filters]);

  return (
    <div className="task-manager-container">
      <h1>Task Manager</h1>

      {/* Form thêm công việc */}
      <form className="card add-task-form" >
        <input
          type="text"
          placeholder="Công việc mới"
          className="task-input"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <select
          className="priority-select"
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value as Priority)}
        >
          <option value="Cao">Cao</option>
          <option value="Trung bình">Trung bình</option>
          <option value="Thấp">Thấp</option>
        </select>
        <button type="submit" className="add-button" onClick={(e) => { 
    e.preventDefault(); 
    return taskUpdate == null 
      ? dispatch(addTask({ taskName: newTaskText, completed: false, priority: newTaskPriority, id: Number(Date.now()) })) 
      : dispatch(updateTask({ ...taskUpdate!, taskName: newTaskText, priority: newTaskPriority }))}}>{taskUpdate ? "Cập Nhật" : "Thêm"}</button>
        {taskUpdate && <button onClick={()=>setTaskUpdate(null)} style={{ backgroundColor: "red" }} >Hủy Cập Nhật</button>}
      </form>

      {/* Bộ lọc */}
      <div className="card filter-controls">
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option>Tất cả</option>
          <option>Hoàn thành</option>
          <option>Chưa hoàn thành</option>
        </select>
        <select
          value={filters.priority}
          onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
        >
          <option>Tất cả</option>
          <option>Cao</option>
          <option>Trung bình</option>
          <option>Thấp</option>
        </select>
        <input
          type="text"
          placeholder="Tìm kiếm"
          value={filters.searchTerm}
          onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
        />
      </div>

      {/* Danh sách công việc */}
      <div className="task-list">
        {filteredTasks.map(task => (
          <div key={task.id} className={`card task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={()=>dispatch(toggleTask(task.id))}
            />
            <p className="task-text">{task.taskName}</p>
            <span className={`badge badge-${task.priority.toLowerCase().replace(' ', '-')}`}>
              {task.priority.toUpperCase()}
            </span>
            <button className="icon-button" onClick={()=>dispatch(deleteTask(task.id))}>🗑️</button>
            <button className="icon-button" onClick={()=>{setTaskUpdate(task); setNewTaskText(task.taskName); setNewTaskPriority(task.priority)}}>✏️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;