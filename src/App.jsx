import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://reqres.in/api/users?page=1')
    setData(response.data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <input type="text" placeholder='input' value={input} onInput={(e) => setInput(e.target.value)}/>
    </div>
  )
}

export default App
