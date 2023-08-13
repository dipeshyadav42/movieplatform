import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Header() {
  const navigate=useNavigate()
  const{loginname,setLoginname}=useContext(Contextapi)
  function handlelogout(e){
    window.localStorage.removeItem('loginname')
    setLoginname(window.localStorage.getItem('loginname'))
    navigate('/')
  }

    return ( 
        <section id="header">
        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
        
        <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#D5F5E3 "}}>
<div className="container-fluid">
{/* <img style={{width:"150px"}} src="netfilx.png" alt=""></img> */}
<h3 className="text-primary">MOVIES HUB</h3>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
{loginname?
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/movies">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/movies">Welcome {loginname} </Link>
    </li>
  
    
 
  </ul>
  :<h2></h2>
  }
   {loginname?
      <button className='btn btn-danger' onClick={(e)=>{handlelogout(e)}}>Logout</button>
    :<h2></h2>
  }


</div>
</div>
</nav>
        </div>
        </div>
        </div>

    </section>
     );
}

export default Header;