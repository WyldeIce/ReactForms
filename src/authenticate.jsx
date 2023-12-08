import {useState} from 'react'

const AuthUser = ({token}) => {
    const [successMsg, setSuccessMsg] = useState(null)
    const [error, setError] = useState(null)
    const [result, setResult] = useState(null)

    async function handleClick() {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
                method: "GET", 
                headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
                }
            })
            const resultData = await response.json()
            setSuccessMsg(resultData.message)
            setResult(resultData)
        } catch (error) {
            setError(error.message)
        }
        return result
    }

    return (
        <div>
            <h2>Authentication</h2>
            {successMsg && <p>{successMsg}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authentication Token</button>
            {result && result.data && <p>Current User: {result.data.username}</p>}
        </div>
    )
}

export default AuthUser