import { useState, useEffect } from 'react'
import LoginForm from './loginForm'
import AuthUser from './authenticate'
import './App.css'

function App() {
const [token, setToken] = useState(null)
return (
  <div>
    <LoginForm token={token} setToken={setToken}/>
    <AuthUser token={token} setToken={setToken}/>
  </div>
)

}

export default App
