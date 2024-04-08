import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvidre";
import { updateProfile } from "firebase/auth";




const Register = () => {
    const [showPass,setShowPass]=useState(false)

    const {register}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const from=new FormData(e.currentTarget);
        const email=from.get('email')
        const password=from.get('password')
        const name=from.get('name')
        const photo=from.get('photo')

        
        register(email,password)
        .then(res=>{
            console.log(res.user);
            updateProfile(res.user,{
                displayName:name,
                photoURL:photo
            })
            e.target.reset()
        
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <div>
            <Navbar></Navbar>
 
    <div className="lg:w-1/2    mx-auto">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          
          <input name='password' type={showPass ? 'text' : 'password'} placeholder="password" className="input input-bordered" required/>
          <span  onClick={()=>{setShowPass(!showPass)}}>show</span>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <h1 className="mt-4 text-center">Already have an account <Link to='/login'><span className="ml-4 text-blue-600 font-bold link">Login</span></Link></h1>
        </div>
      </form>
    </div>

        </div>
    );
};

export default Register;