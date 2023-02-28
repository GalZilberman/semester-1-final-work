import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContext } from './MainContext';
import Button from '@mui/material/Button';

export default function LogIn() {

    const navigate = useNavigate();

    const { users } = useContext(MainContext);


    let email = "";
    let pass = "";


    const btnLogin = () => {
        if (email === "admin" && pass === "rupin") {
            navigate("/management");
        }
        else if (users.find(user => user.email === email) != undefined && users.find(user => user.pass === pass) != undefined) {
            email = "";
            pass = "";
            navigate("/");
        }
        else {
            alert("Try again");
        }

    };

    return (
        <div>
            <div style={{
                border: "2px solid blue",
                padding: "25px",
                borderRadius: '10px',
                margin: "70px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <h2>Login</h2>
                <label htmlFor="email">email</label>
                <input type="email" id='email' onChange={e => email = e.target.value} /> <br />
                <label htmlFor="pass">pass</label>
                <input type="password" id='pass' onChange={e => pass = e.target.value} /> <br /> <br />

                <Button onClick={btnLogin} variant="contained" disableElevation>
                    Log in
                </Button>

            </div>

        </div>
    )
}
