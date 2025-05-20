import React from 'react'
import { use } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import Login from './Login';
const Register = () => {


    const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get('username');
    const mobilenumber = data.get('mobilenumber');
    const password = data.get('password');
    const confirmpassword = data.get('confirmpassword');

    if (password.length < 8 || confirmpassword.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }

    if (password !== confirmpassword) {
        alert("Password mismatch");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: username,
                mobilenumber,
                password
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert("Registered successfully");
            e.target.reset(); // optional: clears form after success
        } else {
            alert(`Registration failed: ${result.error || "Unknown error"}`);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

    return (
        <div>
            <h1> Register</h1>


            <form onSubmit={handleSubmit} className="div"
            
                style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '70px', gap: '10px',border:'3px solid white' }}>
                <input
                    style={{ height: '35px', width: '300px' }}
                    type="text"
                    name="username"
                    // onChange={handleChange}
                    placeholder='Enter Name'
                />


                <input
                    style={{ height: '35px', width: '300px' }}
                    type="text"
                    name="mobilenumber"
                    // onChange={handleChange}
                    placeholder='Enter mobile number'
                    required
                    minLength={10}
                    maxLength={10}
                />

                <input
                    style={{ height: '35px', width: '300px' }}
                    type="password"
                    name="password"
                    // onChange={handleChange}
                    placeholder='Enter Password'
                />

                <input
                    style={{ height: '35px', width: '300px' }}
                    type="password"
                    name="confirmpassword"
                    // onChange={handleChange}
                    placeholder='Confirm password'
                />
                
                
                <button
                    style={{ height: '43px', width: '100px', marginLeft: '100px', color: 'white', textAlign: 'center' }}
                    type='submit'
                    name='submit'
                    // onSubmit={handleSubmit}
                >Register

                </button>

                <h3> Already have an Account ? <Link to="/Login">Login</Link></h3>
            </form>
        </div>
    );
};

export default Register
