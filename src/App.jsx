
import './App.css'
import { Nav } from './components/Nav'
import { Route, Routes } from 'react-router'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import {UserData} from './components/Home'
import { EditData } from './components/Edit'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/" element={<UserData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/edit" element={<EditData/>}/>
        </Routes>
    </div>
  )
}

export default App
