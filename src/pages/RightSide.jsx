import { FaFacebook,  FaSearch, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import img1 from '../assets/qZone1.png'
import img2 from '../assets/qZone2.png'
import img3 from '../assets/qZone3.png'

const RightSide = () => {
    return (
        <div className="p-3">
           <div>
            <h1 className="text-4xl  mb-2">Login With</h1>
           <div>
           <button className="btn w-full mb-4">
           <FcGoogle />
google
</button>
<button className="btn w-full">
  <FaGithub></FaGithub>
github
</button>
           </div>
           </div>


           <div className="mt-10 ">
            <h1 className="text-4xl  mb-2">Find Us on</h1>
           <div>
           <button className="btn w-full mb-4">
           <FaFacebook />
Facebook
</button>
<button className="btn w-full mb-3">
  <FaTwitter/>

Twitter
</button>
<button className="btn w-full">
  <FaTwitter></FaTwitter>

Facebook
</button>


          
           </div>
           </div>



           <div >
           <div className="flex items-center gap-4 text-3xl mt-4">
           <FaSearch></FaSearch>
            <h1> Zone</h1>
           </div>

           <div>
            <img src={img1} alt="" /> 
            <img src={img2} alt="" />
            <img src={img3} alt="" />
           </div>
           </div>
        </div>
    );
};

export default RightSide;