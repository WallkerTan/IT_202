import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import axios from 'axios';
import './App.css'
type Task={
  id: number,
  name: string,
  isCompleted: boolean
}
export default function App() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<string>("");
  const [newtask, setNewTask] = useState<string>("");
  const [currentPage, setCurrentPage]=useState<string>("all");
  const [updateId, setUpdateId]=useState<number>(-1);
  const filteredTasks = tasks.filter((task) => currentPage == "all" ? task : currentPage == "completed" ? task.isCompleted == true : task.isCompleted == false);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setNewTask(e.target.value);
    setError("");
  }
  function toggleTask(id: number) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
    axios.patch(`http://localhost:8080/tasks/${id}`, {isCompleted: !tasks.find((task) => task.id==id)?.isCompleted});
  }
  async function getTasks(){
    let result: Task[];
    try{
      const res = await axios.get("http://localhost:8080/tasks");
      result=res.data;
    }catch{
      setLoading(false);
      setTasks([]);
      result=[];
    }finally{
      setTimeout(()=>{
        setLoading(false);
        setTasks([...result]);
      }, 1500);
    }
  }
  useEffect(()=>{
    getTasks();
  }, []);
  async function addTask() {
    if(newtask.trim() == ""){
      setError("Khong duoc de trong ten cong viec");
      return;
    }
    if(tasks.some((task) => task.name==newtask && task.id!=updateId)){
      setError("Cong viec da ton tai");
      return;
    }
    if(updateId==-1){
      const res = await axios.post("http://localhost:8080/tasks", {name: newtask, isCompleted: false});
      setTasks([...tasks, res.data]);
    }else{
      setTasks(tasks.map(task =>
        task.id == updateId ? {...task, name: newtask} : task
      ));
      await axios.patch(`http://localhost:8080/tasks/${updateId}`, {name: newtask});
    }
    setNewTask("");
    setError("");
  }
  async function deleteTask(id: number){
    if(confirm("Ban co chac chan muon xoa cong viec nay?")){
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id!=id));
    }
  }
  async function deleteCompleted(){
    if(confirm("Xoa cong viec da hoan thanh?")){
      for(let i=0; i<tasks.length; i++){
        if(tasks[i].isCompleted==true){
          await axios.delete(`http://localhost:8080/tasks/${tasks[i].id}`);
        }
      }
      setTasks(tasks.filter((task) => task.isCompleted==false));
    }
  }
  async function deleteAll(){
    if(confirm("Xoa tat ca cong viec?")){
      for(let i=0; i<tasks.length; i++){
        await axios.delete(`http://localhost:8080/tasks/${tasks[i].id}`);
      }
      setTasks([]);
    }
  }
  return (
    <div className='container'>
      <h2>Quan li cong viec</h2>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()} className='add-container'>
        <input onChange={handleChange} name='name' type="text" placeholder='Nhap ten cong viec' value={newtask}/>
        <p className='error'>{error}</p>
        <button onClick={addTask}>{updateId == -1 ? "Them cong viec" : "Sua cong viec"}</button>
      </form>
      <div className='sort-container'>
        <div onClick={()=>setCurrentPage("all")} className={currentPage=="all" ? "active" : ""}>Tat ca</div>
        <div onClick={()=>setCurrentPage("completed")} className={currentPage=="completed" ? "active" : ""}>Hoan thanh</div>
        <div onClick={()=>setCurrentPage("notCompleted")} className={currentPage=="notCompleted" ? "active" : ""}>Dang thuc hien</div>
      </div>
      <div className='tasks-container'>
        {loading ? <Loading></Loading> : 
          filteredTasks.map((task, index) =>{
            return <div className='task' key={index}>
              <div className='left'>
                <input onChange={() => toggleTask(task.id)} type="checkbox" checked={task.isCompleted}/>
                <div className={task.isCompleted ? "lineThrough" : ""}>{task.name}</div>
              </div>
              <div className='button-container'>
                <button onClick={()=>{setUpdateId(task.id); setNewTask(task.name)}} className='update'>Sua</button>
                <button onClick={()=>deleteTask(task.id)} className='delete'>Xoa</button>
              </div>
            </div>
        })}
      </div>
      <div className='delete-container'>
        <button onClick={deleteCompleted} className='deleteCompleted'>Xoa cong viec hoan thanh</button>
        <button onClick={deleteAll} className='deleteAll'>Xoa tat ca cong viec</button>
      </div>
    </div>
  )
}
