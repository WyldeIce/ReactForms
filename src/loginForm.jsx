import {useState} from 'react'

const LoginForm = ({setToken}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    async function handleSubmit(event){
      event.preventDefault();
      try {
        const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
        { 
          method: "POST", 
          headers: { 
            "Content-Type": "application/json" 
          }, 
          body: JSON.stringify({ 
            username: username, 
            password: password 
          }) 
        })
        const result = await response.json()
        setToken(result.token)
      } catch (error) {
        setError(error.message)
      }
    };
  
    return(
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: <input id="username" type="text" value={username} onChange = {(event) => setUsername(event.target.value)} /> </label>
        </div>
        <div>
          <label htmlFor="password">Password: <input id="password" type="password" value={password} onChange = {(event) => setPassword(event.target.value)} /> </label>
        </div>
        <p>Username must be 3 or more characters! Password must be 8 or more characters!</p>
        <button disabled={(username.length < 3 || password.length < 8) ? true: false}>Submit</button>
      </form>
      </div>
    );
  };

  export default LoginForm