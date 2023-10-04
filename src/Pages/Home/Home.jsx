import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const allNews = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 ">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2">
                   {
                    allNews.map(news => <NewsCard
                    key={news._id}
                    allNews={news}
                    ></NewsCard>)
                   }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;