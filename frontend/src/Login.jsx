import React from 'react'
import { use } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import Register from './Register';
const Login = () => {

    const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const mobilenumber = data.get('mobilenumber');
    const password = data.get('password');

    if (password.length < 8) {
        alert("Password should be at least 8 characters");
        return;
    }

    try {
        const response = await axios.post("http://localhost:5000/Login", {
            mobilenumber,password
        });

        if (response.data.success) {
            alert("Login Successful");
            navigate("/Home");
        } else {
            alert(`Login failed: ${result.error || "Invalid credentials"}`);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

    return (
        <div>
            <h1> Login</h1>


            <form onSubmit={handleSubmit} className="div"
            
                style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '70px 20px', gap: '10px',border:'3px solid white' }}>
                


                <input
                    style={{ height: '35px', width: '300px' }}
                    type="text"
                    name="mobilenumber"
                    // onChange={handleChange}
                    placeholder='Enter mobilenumber'
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
                
                <button
                    style={{ height: '43px', width: '100px', marginLeft: '100px', color: 'white', textAlign: 'center' }}
                    type='submit'
                    name='submit'
                    // onSubmit={handleSubmit}
                >Login

                </button>

                <h3> Don't have an Account ? <Link to="/">Register</Link></h3>
            </form>
        </div>
    );
};

export default Login
