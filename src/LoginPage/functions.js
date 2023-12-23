import { setCookie,getCookie } from '../functions'; 

async function handleLogin(event,setPassWarn,setUserWarn,setUserNotFound,credentials,navigate){
    event.preventDefault();
    let username = credentials.username;
    let password = credentials.password;

    if(username.length == 0){
        setUserWarn(true);
    }
    if(password.length == 0){
        setPassWarn(true);
    }
    if(username.length==0 || password.length==0){
        return;
    }
    setPassWarn(false);
    setUserWarn(false);
    setUserNotFound('');

    const data = {
        username: username,
        password: password
    }
    const head = {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }
    const url = 'https://dummyjson.com/auth/login';

    try {
        const response = await fetch(url,head);
        if (response.status === 200) {
            const data = await response.json();
            setCookie("token",data.token,60);
            navigate('/shop', { state: data });
        } 
        else if (response.status === 400){
            throw new Error('Failed to login');
        }
    } catch(error) {
        setUserNotFound(error.message);
    }
}

export default handleLogin;