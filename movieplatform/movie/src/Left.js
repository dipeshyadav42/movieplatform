import { Link } from "react-router-dom";

function Left() {
    return ( 
        <div className="col-md-3">
            <Link to={"/adminmovie"}><button className="btn btn-warning mt-3">Movie Management</button></Link>
            <Link to={"/type"}><button className="btn btn-warning mt-3">Catogary Management</button></Link>
        </div>
     );
}

export default Left;