import { useState } from 'react'
import styled from 'styled-components'

import TabSection from './Components/TabSection'
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import Task from './Components/Task'

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

function App(props) {

  const [tab, setTab] = useState('');
  const [currentTask, setCurrentTast] = useState('');
  const [tasks, setTasks] = useState(todos);
  const task_map = Array.from(tasks).map(task => {
    if (task.status.includes(tab))
    {
      if (task.status == 'completed') return <Task uuid={task.uuid} strike={true} task={task.task} key={task.uuid} tab={tab} tasks={tasks} setTasks={setTasks}/>
      return <Task uuid={task.uuid} task={task.task} key={task.uuid} tab={tab} tasks={tasks} setTasks={setTasks}/>
    }
  });


  return (
    <div className="app">
      <header className='header'>
        <H1>#todo</H1>
      </header>
      <main className="main">
        <TabSection setTab={setTab}/>
        {tab == 'completed' ? null: <AddTask />}
        <Tasks>
          {task_map}
        </Tasks>
      </main>
    </div>
  )
}

export default App
