import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";


const News = () => {

    const {id} = useParams();
    const news = useLoaderData();
    console.log(news);
    const {image_url, title, discription} = news;

    return (
        <div>
            <Header></Header>
           <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h1 className="text-2xl font-medium">Dragon News</h1>
                <p>{id}</p>
                <img src={image_url} alt="" />
                <p>{title}</p>

            </div>
            <div>
                <RightSideNav></RightSideNav>
            </div>
           </div>
            
        </div>
    );
};

export default News;