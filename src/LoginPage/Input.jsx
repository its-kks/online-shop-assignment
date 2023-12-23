import './login.css'
function Input({onChange,type,name,id,placeholder}){
    return(
        <>
            <input 
                type={type} 
                name={name} 
                id={id} 
                placeholder={placeholder} 
                onChange={onChange}
                className="inputStyle"
            />

        </>
    )
}

export default Input;