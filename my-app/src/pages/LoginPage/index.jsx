import React, {useState, useContext} from 'react';

import { AuthContext } from "../../contexts/auth";

const LoginPage = () => {

    const { authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit', {email, password});

        login(email, password);
    };

    return (
        <div id="login">
            <h1 className="tilte">Login Do Sistema</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className='field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='field'>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <div className='actions'>
                    <button type='submit'>Entrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;