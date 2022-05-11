import { useState } from 'react'
import styled from 'styled-components'

import TabSection from './Components/TabSection'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import Task from './Components/Task'
import { MdDeleteOutline } from 'react-icons/md'

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
const todos = [
  {task: 'walk the dog', uuid: 'ab', status: 'active'},
  {task: 'go shopping', uuid: 'abc', status: 'completed'},
  {task: 'practice tests', uuid: 'abe', status: 'completed'},
  {task: 'swimming lessons', uuid: 'abg', status: 'active'},

]

function completedCount(arr = null) {
  if (!arr.length) return 0;
  let count = arr.filter(task => {
    if (task.status == 'completed') return 1;
  }).reduce((a,b) => a + b, 0);

  return count;
}

function App(props) {

  const [tab, setTab] = useState('active');
  const [tasks, setTasks] = useState([]);
  const task_map = Array.from(tasks).map(task => {
    if (task.status.includes(tab))
    {
      if (task.status == 'completed') return <Task uuid={task.uuid} strike={true} task={task.task} key={task.uuid} tab={tab} tasks={tasks} setTasks={setTasks}/>
      return <Task uuid={task.uuid} task={task.task} key={task.uuid} tab={tab} tasks={tasks} setTasks={setTasks}/>
    }
  });

  let completeCount = completedCount(tasks);
  let del_btn = <button className="delete_all_btn"><MdDeleteOutline/> delete all</button>

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
          {tab == 'completed' ? del_btn: null}
        </div>
      </main>
    </div>
  )
}

export default App
