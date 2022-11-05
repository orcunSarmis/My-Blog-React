import { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <input 
        placeholder="Your email address"
        value={email}
        onChange={e => setEmail(e.target.value)} />
        <input 
        type="password" 
        placeholder="Your password"
        value={password}
        onChange={e => setPassword(e.target.value)} 
        />
        <button>Log In</button> 
        <Link to={"/create-account"}>Don't have a account? Create one here</Link>
        </>
        
    );
}

export default LoginPage;