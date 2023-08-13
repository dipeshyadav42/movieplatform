import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Login() {
    const{setLoginname}=useContext(Contextapi)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [message,setMessage]=useState('')
   
    const navigate=useNavigate()

    function handleform(e){
        e.preventDefault()
        const data={username,password}
        fetch('/api/logincheck',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((result)=>{return result.json()}).then((data)=>{
            // console.log(data)
            if(data.status===200){
                window.localStorage.setItem('loginname',data.apiData.username)
                setLoginname(window.localStorage.getItem('loginname'))
                if(data.apiData.username==='admin'){
                    navigate('/dashboard')
                }else{
                    navigate('/movies')
                }
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
                        <h2 style={{textAlign:"center"}}>Login! !</h2>
                        <h6 style={{color:'red'}}>{message}</h6>
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label>Username</label>
                            <input type="text" 
                            className="form-control"
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            <label>Password</label>
                            <input type="text" 
                             className="form-control"
                             value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                             />
                            <button type="submit"  className="form-control btn btn-success mt-2">Register</button>
                        </form>
                        <Link to='/reg'>click here for new account</Link>
                    </div>
                    <div className="col-md-4"></div>
                </div >
            </div>
        </section>
     );
}

export default Login;

