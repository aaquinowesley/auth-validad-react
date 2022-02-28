import React, { useState, useEffect, createContext } from 'react';

import { useNavigate } from "react-router-dom"

import {api, createSession} from "../services/api"

export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {
    const  navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (email, password) => {
        
        //const response = await createSession(email, password);
        
        //console.log("login auth", {response.data});

        //api criar uma session

        const loggedUser = {
            id: '123',
            email,
        };

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password === 'pass'){
            setUser({loggedUser});
            navigate("/");
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem('user');
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{authenticated: 
            !!user, user, loading ,login, logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}