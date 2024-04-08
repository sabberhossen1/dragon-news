import { Link } from "react-router-dom";

const NewsCard = ({newsCard}) => {
        const {_id,image_url,title,details}=newsCard
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          {details.length > 200 ?  <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="link text-blue-600">ReadMore...</Link></p> : <p>{details}</p>}
         
        
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
