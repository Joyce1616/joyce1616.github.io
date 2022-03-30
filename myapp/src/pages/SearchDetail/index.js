import * as React from 'react';
import { useState, useEffect } from "react";
// import Carousel from "../../components/Common/Carousel";
import { requesScenicSpot, requesActivity, requesRestaurant } from "../../controller/apiManager";
import { useParams, useLocation } from "react-router-dom";
import DetailInfo from "./common/DetailInfo"
import Info from "./common/Info";
import Maps from "./common/Map";
import Other from "./common/Other";
import IntroList from '../../components/Common/IntroList';
import Img from './common/Img';

async function fetchScenicSpotData(setDetailData, id){ //載入頁面取後端資料
    const getdata = await requesScenicSpot('', {
        $filter: `ScenicSpotID eq '`+id+`'`,
        $format: 'JSON'
    });
    setDetailData(getdata);
}

async function fetchRestaurantData(setDetailData, id){ //載入頁面取後端資料
    const getdata = await requesRestaurant('', {
        $filter: `RestaurantID eq '`+id+`'`,
        $format: 'JSON'
    });
    setDetailData(getdata);
}

async function fetchActivityData(setDetailData, id){ //載入頁面取後端資料
    const getdata = await requesActivity('', {
        $filter: `ActivityID eq '`+id+`'`,
        $format: 'JSON'
    });
    setDetailData(getdata);
}


const SearchDetail = () => {
    const { itemId, itemType } = useParams();
    const loc = useLocation();
    const [searchDetailData, setDetailData] = useState([]);
    useEffect(() => {
        if(itemType === 'ActivityID'){
            fetchActivityData(setDetailData, itemId);
        }

        if(itemType === 'ScenicSpotID'){
            fetchScenicSpotData(setDetailData, itemId);
        }

        if(itemType === 'RestaurantID'){
            fetchRestaurantData(setDetailData, itemId);
        }
    }, [loc]);

    return (
      <div>
          { searchDetailData.length > 0 && (<Img data={searchDetailData} />)}
          { searchDetailData.length > 0 && (<Info data={searchDetailData} itemType={itemType}/>)}
          <div className="container px-5" id="infoBlock">
            <div className="row">
                { searchDetailData.length > 0 && (<DetailInfo data={searchDetailData} itemType={itemType}/>)}
                <div className="col-6 p-2">
                    <Maps/>
                    <Other/>
                </div>
            </div>
          </div>
          <IntroList title={itemType} type="PC"/>
      </div>
    );
  };
  
  export default SearchDetail;