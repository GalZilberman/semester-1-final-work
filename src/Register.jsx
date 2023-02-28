import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContext } from './MainContext';
import Button from '@mui/material/Button';

export default function Register() {

    let email = "";
    let pass1 = "";
    let pass2 = "";


    const navigate = useNavigate();

    const { setUsers, users } = useContext(MainContext)



    const btnRegister = () => {
        if (email === "" || pass1 === "" || pass2 === "") {
            alert("All sections must be filled in");
        }
        else {
            if (pass1 === pass2) {
                let newUser = { id: users.length + 1, email: email, pass: pass1 };
                let newUsers = [...users, newUser];
                setUsers(newUsers);
                console.log("dd")
                navigate("/login");
            }
            else {
                alert("Passwords are not the same");
            }
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
                <h2>Registration</h2>
                <label htmlFor="email">email </label>
                <input type="email" id='email' onChange={e => email = e.target.value} /> <br />
                <label htmlFor="pass">pass </label>
                <input type="password" id='pass' onChange={e => pass1 = e.target.value} /> <br />
                <label htmlFor="pass2">confirm pass </label>
                <input type="password" id='pass2' onChange={e => pass2 = e.target.value} /> <br /> <br />

                <Button onClick={btnRegister} variant="contained" disableElevation>
                    Log in
                </Button>
            </div>
        </div>
    )
}
