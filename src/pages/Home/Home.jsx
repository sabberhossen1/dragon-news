import Header from "../Header";
import LeftSide from "../LeftSide";
import Navbar from "../Navbar";
import RightSide from "../RightSide";
import {
    
    useLoaderData,
  } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
    const news=useLoaderData()
    console.log(news);
    return (
        <div className="max-w-screen-xl mx-auto">
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="border">
                <LeftSide></LeftSide>
            </div>
            <div className="border lg:col-span-2">
               {news.map(newsCard=><NewsCard key={newsCard._id} newsCard={newsCard}></NewsCard>)}
            </div>
            <div className="border">
                <RightSide></RightSide>
            </div>
        </div>
        </div>
    );
};

export default Home;