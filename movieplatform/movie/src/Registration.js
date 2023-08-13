import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')

    function handleform(e){
        e.preventDefault()
        const formdata={username,password}
        fetch('/api/reg',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data.status===201){
                setMessage(data.message)
            }else{
                setMessage(data.message)
    
            }   
        })
      
    }
    return ( 
        <section id="reg">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 style={{textAlign:"center",color:"blue"}}>Sign Up! !</h2>
                        <h6 style={{color:'red'}}>{message}</h6>
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label>Username</label>
                            <input type="text" 
                            className="form-control"
                            required
                            value={username} minLength={4}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            <label>Password</label>
                            <input type="text" 
                            required
                             className="form-control"
                             value={password} minLength={5} maxLength={10}
                            onChange={(e)=>{setPassword(e.target.value)}}
                             />
                            <button type="submit"  className="form-control btn btn-success mt-2">Register</button>
                        </form>
                        <Link to='/'>already have an account click here</Link>
                        
                    </div>
                    <div className="col-md-4"></div>
                </div >
            </div>
        </section>
     );
}

export default Register;

