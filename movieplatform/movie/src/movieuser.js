import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Usermovie() {
    const [movie,setMovie]=useState([])
    const {loginname}=useContext(Contextapi)
    // const [category,setCategory]=useState('')
    const navigate=useNavigate()

    if(!loginname){
        navigate('/')
    }


    useEffect(()=>{
        fetch('/api/moviedata').then((result)=>{return result.json()}).then((data)=>{
            //console.log(data)
            if(data.status===200){
                setMovie(data.apiData)
            }else{
                setMovie(data.apiData)
            }
        })
    },[])

//     useEffect(()=>{
//     fetch('/api/search').then((result)=>{return result.json()}).then((data)=>{
//         console.log(data)
//     })
// },[])

    return ( 
        <section id="movie">
           <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <select className="form-select">
                       {movie.map((result)=>(
                        <option key={result._id}>{result.category}</option>
                       ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <button type="search" className="btn btn-info">Search</button>
                </div>
                <div className="col-md-4"></div>
            </div>
           </div>


            <div className="container">
                <div className="row">
                    {movie.map((result)=>(
                        <div className="col-md-3" key={result._id}>
                       <div className="card mt-5" style={{background:'#ECF2F8'}}>
                       <img src={`./images/${result.img}`} style={{width:'100%',height:'500px'}} alt=""  />
  <div className="card-body">
    <h5 className="card-title">{result?.name.length>20?result?.name?.substring(0, 20):result.name}</h5>
    <p className="card-text" style={{textAlign:'justify'}}>{result.desc}</p>
    <h6 style={{color:"blue"}}>Movie Type:{result.type}</h6>
    <h6 style={{color:"green"}}>Movie category:{result.category}</h6>
  </div>
  <Link to={`/moviewatch/${result._id}`}><button className="btn btn-primary mb-2">Watch It</button></Link>

</div>   

                       </div>
                    ))}
                    <button className="btn btn-warning mt-3 mb-5">See More</button>
                       
                    
                   
                
                </div>
            </div>
        </section>
     );
}

export default Usermovie;