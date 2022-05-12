import { useState } from 'react'
import styled from 'styled-components'

import TabSection from './Components/TabSection'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import Task from './Components/Task'
import { MdDeleteOutline } from 'react-icons/md'

if(!localStorage.getItem('todos')) {
  localStorage.setItem('todos',JSON.stringify([]));
} 

const H1 = styled.h1`
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  line-height: 42.26px;
  leter-spacing: -0.045em;
  color: #333333;
  display: flex;
  text-align: center;
  justify-content: center;
`

function completedCount(arr = null) {
  if (!arr.length) return 0;

  let count = arr.filter(task => {
    if (task.status == 'completed') return task;
  })

  return count.length;
}

function App(props) {

  const [tab, setTab] = useState('active');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('todos')));
  const task_map = Array.from(tasks).map(task => {
    if (task.status.includes(tab))
    {
      if (task.status == 'completed') {
        return <Task uuid={task.uuid} date={task.date} strike={true} task={task.task} key={task.uuid} tab={tab} tasks={tasks} setTasks={setTasks}/>
      }
      return <Task uuid={task.uuid} date={task.date} strike={false} task={task.task} key={task.uuid} tab={tab} tasks={tasks} setTasks={setTasks}/>
    }
  });

  const handleDeleteAll = (e) => {
    e.preventDefault();
    const task_map = Array.from(tasks).filter(task => {
      if (task.status != 'completed') return task;
    })

    setTasks(task_map);
    localStorage.setItem('todos', JSON.stringify(task_map));

  }

  let completeCount = completedCount(tasks);
  let del_btn = <button onClick={handleDeleteAll} className="delete_all_btn"><MdDeleteOutline/> delete all</button>



  return (
    <div className="app">
      <header className='header'>
        <H1>#todo</H1>
      </header>
      <main className="main">
        <TabSection setTab={setTab}/>
        {tab == 'completed' ? null: <AddTask tasks={tasks} setTasks={setTasks}/>}
        <Tasks>
          {completeCount <= 0 && tab == 'completed' ? <span className='nothing'>Nothing done yet...</span> : task_map}
        </Tasks>
        <div className="delete_all">
          {tab == 'completed' && completeCount >= 1 ? del_btn: null}
        </div>
      </main>
      <footer className="footer">
        <p>created by <a href="https://devchallenges.io/portfolio/DoIfeanyichukwu">DoIfeanyichukwu</a> - <a href="https://devchallenges.io">devChallenges.io</a></p>
      </footer>
    </div>
  )
}



export default App
