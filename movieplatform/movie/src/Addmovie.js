import { useContext, useEffect, useState } from "react";
import Left from "./Left";
import { Contextapi } from "./Contextapi";
import { useNavigate } from "react-router-dom";


function Addmovie() {
  
const {loginname}=useContext(Contextapi)
const navigate=useNavigate()

if(!loginname){
  navigate('/')
}

  const [img,setImg]=useState('')
  const [name,setName]=useState('')
  const [desc,setDesc]=useState('')
  const [cat,setCat]=useState('')
  const [type,setType]=useState('') 
  const [category,setCategory]=useState([])
  const [message,setMessage]=useState('')

  function handleimg(e){
    setImg(e.target.files[0])
  }

  function handleform(e){
    e.preventDefault()
    // console.log(name,desc,type)
    // console.log(img) 

    let data=new FormData()
    data.append('file',img)
    data.append('name',name)
    data.append('desc',desc)
    data.append('cat',cat)
    data.append('type',type)
   
    // console.log(data)
    
    fetch('/api/movieadd',{
      method:'POST',
      body:data
    }).then((result)=>{return result.json()}).then((data)=>{
       console.log(data)
      if(data.status===201){
        setMessage(data.message)
      }else{
        setMessage(data.message)
      }
    })

  }

  useEffect(()=>{
    fetch('/api/categoryrecord').then((result)=>{return result.json()}).then((data)=>{
             if(data.status===200){
               setCategory(data.apidata)
             }else{
                setMessage(data.message)
             }
    })
},[])


    return ( 
        <section id="mid">
          
            <div className="container">
            <div className="row">
                <Left/>
                <div className="col-md-9">
                <h2 style={{textAlign:'center'}}>Add Movie Here</h2>
                
                {message}

                <form onSubmit={(e)=>{handleform(e)}}>

  <label>Image</label>
  <input type="file"
   className="form-control"
   onChange={(e)=>{handleimg(e)}}
  />

  <label>Name</label>
  <input type="text" 
  className="form-control"
  value={name}
  onChange={(e)=>{setName(e.target.value)}}
  />

  <label>Description</label>
  <input type="text"
   className="form-control"
   value={desc}
   onChange={(e)=>{setDesc(e.target.value)}}
   />

   <label>Category</label>
   <select className="form-select" defaultValue="" onChange={(e)=>{setCat(e.target.value)}} value={cat}>
   <option></option>
   {category.map((result,key)=>(
                <option value={result.category} key={result._id}>{result.category}</option>
                ))}
   </select>


  <label>Type</label>
  <select className="form-select" value='type' defaultValue="" onChange={(e)=>setType(e.target.value)}>
                          <option></option>
                        <option value='action'>Action</option>
                        <option value='romance'>Romance</option>
                        <option value='horror'>Horror</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='mystery'>Mystery</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='drama'>Drama</option>
                        </select>    

        

    <button className="btn btn-primary mt-3 form-control">Post Movie</button>

</form>
                </div>
            </div>
            </div>
        </section>
     );
}

export default Addmovie;

