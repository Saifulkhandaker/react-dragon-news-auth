import { Link } from "react-router-dom";

const NewsCard = ({ allNews }) => {
  const { title, image_url, details, _id } = allNews;

  return (
    <div className="">
      <div className="card rounded-none mb-6 bg-base-100 shadow-xl py-5 px-3">
      <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure>
          <img className=""
            src={image_url}
            alt="Shoes"
          />
        </figure>
         <div className="mt-4">
         {
              details.length > 200 
              ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} 
              className="text-[#FF8C47]">Read More..</Link> </p>
              : <p>{details}</p>
            }
            <hr className="mt-4" />
           
         </div>

      </div>
    </div>
  );
};

export default NewsCard;
