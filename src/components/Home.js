import React from "react";
import Views from "./Views"
import VideoViewr from "./VideoViewr"
import TrendingMovies from "./Trendingmovie"
import TrendingTV from "./TrendingTV"
function Home() {
 
  return (
    <div>
        <Views></Views>
        <VideoViewr></VideoViewr>
        <TrendingMovies/>
        <TrendingTV/>
    </div>
       

  );
}

export default Home;
