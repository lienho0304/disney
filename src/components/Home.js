import React from "react";
import Views from "./Views"
import VideoViewr from "./VideoViewr"
import TrendingMovies from "./Trendingmovie"
import TrendingTV from "./TrendingTV"
import Header from "./Header"

function Home() {
 
  return (
    <div>
      <Header/>
        <Views></Views>
        <VideoViewr></VideoViewr>
        <TrendingMovies/>
        <TrendingTV/>
    </div>
       

  );
}

export default Home;
