import { useState } from 'react'
import './login.css'
import Input from './Input';
import shopImage from  '../assets/online_shop.jpg'
import handleLogin from './functions';
function Login(){
    const [credentials,setCredentials] = useState({
        username:"",
        password:""
    });
    const [userWarn,setUserWarn] = useState(false);
    const [passWarn,setPassWarn] = useState(false);
    const [userNotFound,setUserNotFound] = useState('');

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
                   {userWarn ? <p className='warning'>*Username can't be empty</p> : null}
                    <Input
                        type="password"
                        onChange={updateCredentials}
                        placeholder={"Password"}
                        name="password"
                        id="password"
                    />
                    {passWarn ? <p className='warning'>*Password can't be empty</p> : null}
                    <button 
                        type='submit' 
                        className='loginButton' 
                        onClick={(event)=>{
                            handleLogin(event,setPassWarn,setUserWarn,setUserNotFound,credentials)}
                        }>
                        Login
                    </button>
                    {userNotFound.length != 0 ? <p  className='warning'>{userNotFound}</p> : null}
                </div>
            </div>
        </div>
    </>
    )
}

export default Login;