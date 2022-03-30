import React from "react";
import { useEffect } from "react";
import Carousel from "../../components/Common/Carousel";
import Header from "../../components/Common/Header";
import { SetSelectDom } from '../../js/select.js';
import IntroList from "../../components/Common/IntroList";

const Home = () => {
  useEffect(() => { 
    SetSelectDom();
    // const script = document.createElement("script");
    // script.src = "/bootstrap.js";
    // script.async = true;
    // document.body.appendChild(script);
  }, [])

  return (
    <div>
      <Header/>
      <Carousel/>
      <IntroList title="ActivityID" type="AC"/>
      <IntroList title="ScenicSpotID" type="PC"/>
      <IntroList title="RestaurantID" type="PC"/>
    </div>
  );
};

export default Home;
