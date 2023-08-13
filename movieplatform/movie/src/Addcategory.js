import { useState } from "react";
import Left from "./Left";

function Addcategory() {
    const [cat,setCat]=useState('')
    const [message,setMessage]=useState('')

    function handleform(e){
        e.preventDefault()
        const data={cat}

        fetch('/api/addcat',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then((result)=>{return result.json()}).then((data)=>{
            console.log(data)
           if(data.status===201){
             setMessage(data.message)
           }else{
             setMessage(data.message)
           }
         })
    }

    return ( 
        <section id="cat">
        <div className="container">
        <div className="row">
            <Left/>
            <div className="col-md-9">
            <h6 style={{color:"green"}}>{message}</h6>
                <form onSubmit={(e)=>{handleform(e)}}>
                    <label>Add Category Here</label>
                    <input className="form-control"
                    value={cat}
                    onChange={(e)=>{setCat(e.target.value)}}
                    />
                    <button className="btn btn-primary mt-2 form-control">Add Category</button>
                </form>
            </div>
        </div>
        </div>
    </section>
     );
}

export default Addcategory;