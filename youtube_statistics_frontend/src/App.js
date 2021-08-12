import logo from './logo.svg'
import './App.css'
import getTestModel from './API/testAPI'
import Urls from './API/urls'
import { useState } from 'react'

function App() {
  const [testData, setTestData] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => getTestModel(Urls.urlGetTest, setTestData)}>
          Test API
        </button>
        {testData.map((element) => {
          return <a>{element.string_for_json}</a>
        })}
      </header>
    </div>
  )
}

export default App
