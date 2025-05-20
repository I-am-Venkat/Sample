import React from 'react'
import { use } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Register from './Register';
const Login = () => {

    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data=new FormData(e.target);
        const username=data.get('username');
        // const mobilenumber=data.get('mobilenumber');
        const password=data.get('password');
        if(password.length<8){
            alert("Password should be of length 8")
        }
        if(username=="admin" && password==="Admin@123"){
            alert("Login Successfull")
            navigate("/Home")

        }
        else{
            alert("Invalid Credentials");
            
        }
    }
    return (
        <div>
            <h1> Login</h1>


            <form onSubmit={handleSubmit} className="div"
            
                style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '70px 20px', gap: '10px',border:'3px solid white' }}>
                


                <input
                    style={{ height: '35px', width: '300px' }}
                    type="text"
                    name="username"
                    // onChange={handleChange}
                    placeholder='Enter Username'
                    required
                    // minLength={10}
                    // maxLength={10}
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
