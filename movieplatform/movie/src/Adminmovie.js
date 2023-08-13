import { Link, useNavigate } from "react-router-dom";
import Left from "./Left";
import { useContext, useEffect, useState } from "react";
import { Contextapi } from "./Contextapi";

function Adminmovie() {
    
    const navigate=useNavigate()
    const[movie,setMovie]=useState([])
    const[message,setMessage]=useState('')
    const {loginname}=useContext(Contextapi)
    
    if(!loginname){
        navigate('/')
    }

    useEffect(()=>{
    fetch(`/api/printmovies`).then((result)=>{return result.json()}).then((data)=>{
        console.log(data)
        if(data.status===200){
            setMovie(data.apiData)
        }else{
            setMessage(data.message)
        }
    })
},[])

function handledelete(e,id){
    fetch(`/api/moviedelete/${id}`,{
        method:'DELETE'
    }).then((result)=>{ return result.json()}).then((data)=>{
         console.log(data)
         if(data.status===200){
            navigate('/adminmovie')
         }else{
            setMessage(data.message)
         }
    })
}


    return ( 
        <section id="mid">
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <Link to={"/addmovie"}><button className="btn btn-success form-control mt-3">Add Movies Here</button></Link>
                    <h2 className="text-center" style={{fontFamily:'initial'}}>All movies</h2>
      

            {message}
            <table className="table table-hover">
            <thead>
            <tr>
                <th>S.NO</th>
                <th>Image</th>
                <th>Name</th>
                <th>Desc</th>
                <th>Type</th>
                {/* <th>Action 1</th> */}
                <th>Category</th>
                <th>Action 1</th>
            </tr>
            </thead>

{movie.map((result,key)=>(
    <tbody>
        <tr className="bg-secondary" style={{fontFamily:'inherit',textAlign:'justify'}} key={result._id}>
            <td>{key+1}</td>
            <td><img src={`./images/${result.img}`} style={{width:'80px',overflow:'hidden'}} alt=""  /></td>
            <td>{result.name}</td>
            <td>{result.desc}</td>
            <td>Movie Type:{result.type}</td>
            {/* <td><Link to={`/movieupdate/${result._id}`} className="btn btn-primary">Update</Link></td> */}
            <td>{result.category}</td>
            <td><button className="btn btn-danger" onClick={(e)=>{handledelete(e,result._id)}}>Delete</button></td>
        </tr>
    </tbody>
   
))}
 </table>

        
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Adminmovie;