import { useState } from 'react'
import './login.css'
import Input from './Input';
import shopImage from  '../assets/online_shop.jpg'
function Login(){
    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    });

    function updateCredentials(event){
        const {name,value} = event.target;

        credentials[name] = value;

        setCredentials({...credentials});

    }

    return(
    <>
        <div className='loginPage'>
            <div>
                <img alt="Shopping image" src={shopImage} className='shopBanner'/>
            </div>
            <div className='divCentre'>
                <div className="loginContainer">
                    <Input 
                        type="text"
                        onChange={updateCredentials}
                        placeholder="Username"
                        name="username"
                        id="username"
                    />
                    <Input
                        type="password"
                        onChange={updateCredentials}
                        placeholder={"Password"}
                        name="password"
                        id="password"
                    />
                    <button type='submit' className='loginButton'>Login</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login;