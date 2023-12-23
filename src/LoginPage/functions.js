function handleLogin(event,setPassWarn,setUserWarn,setUserNotFound,credentials){
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

    fetch(url,head)
    .then((response)=>{
        if (response.status === 200) {
            return response.json();
        } 
        else if (response.status === 400){
            throw new Error('Failed to login');
        }
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        setUserNotFound(error.message);
    })

}

export default handleLogin;