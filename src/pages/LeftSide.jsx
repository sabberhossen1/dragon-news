import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [catagorys,setCatagory]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCatagory(data))
    }
    
    ,[])
    return (
        <div>
            <h1>All Categories {catagorys.length}</h1>
           
          <div>
          {catagorys.map(catagory=>
        <Link to={`/catagory/${catagory.id}`} key={catagory.id}><h1 className="my-4">{catagory.name}</h1> </Link>
        )}
          </div>
            
        </div>
    );
};

export default LeftSide;