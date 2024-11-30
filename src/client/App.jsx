import React from "react";
import VideoBackground from "./components/MpFourBackground";
import  Navigation  from "./components/Navagation";

import cyberpunkVideo from "/home/fletcher/newPokemon/Pokedex/src/client/assets/video5.mp4"
import { div } from "framer-motion/client";
const App = () => {
  return (
    <div>
   <div>
        <Navigation />
    </div>
    <div className="h-screen w-full">
      <VideoBackground
        videoSrc={cyberpunkVideo}
        overlayColor="rgba(0, 0, 0, 0.5)"
      >
        <div className="text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold">Welcome to Cyberpunk World</h1>
          <p className="mt-4 text-lg">Experience the future now!</p>
        </div>
      </VideoBackground>
    
    </div>
 

    </div>
  );
};

export default App;
