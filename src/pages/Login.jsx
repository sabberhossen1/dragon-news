import { Link} from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvidre";
import { useNavigate,useLocation } from "react-router-dom";


const Login = () => {
  const navigate=useNavigate()
  const location=useLocation()
  console.log(location);
  const {login}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const from=new FormData(e.currentTarget);
        const email=from.get('email')
        const password=from.get('password')
        console.log(email,password);

        login(email,password)
        .then(res=>{
          console.log(res);
        navigate(location?.state ? location.state : '/');
        })
        .catch(error=>{
          console.log(error);
        })
       
    }
    return (
        <div>
            <Navbar></Navbar>
 
    <div className="lg:w-1/2    mx-auto">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <h1 className="mt-4 text-center">Do not have an account <Link to='/register'><span className="ml-4 text-blue-600 font-bold link">Register</span></Link></h1>
        </div>
      </form>
    </div>

        </div>
    );
};

export default Login;