// import logo from './logo.svg'
import styled from 'styled-components'
import TabSection from './Components/TabSection'
import AddTask from './Components/AddTask'

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

function App(props) {

  return (
    <div className="app">
      <header className='header'>
        <H1>#todo</H1>
      </header>
      <main className="main">
        <TabSection />
        <AddTask />
      </main>
    </div>
  )
}

export default App
