import { useState, useEffect } from "react";
import ActivityCard from "./ActivityCard";
import PointCard from "./PointCard";
import { requesScenicSpot, requesActivity, requesRestaurant } from "../../controller/apiManager";

async function fetchScenicSpotData(sethotList){ //載入頁面取後端資料
    const getdata = await requesScenicSpot('', {
        $filter: "Picture/PictureUrl1 ne null",
        $top: 4,
        $format: 'JSON'
    });
    sethotList(getdata);
}

async function fetchRestaurantData(sethotList){ //載入頁面取後端資料
    const getdata = await requesRestaurant('', {
        $filter: "Picture/PictureUrl1 ne null",
        $top: 4,
        $format: 'JSON'
    });
    sethotList(getdata);
}

async function fetchActivityData(sethotList){ //載入頁面取後端資料
    const getdata = await requesActivity('', {
        $filter: "Picture/PictureUrl1 ne null",
        $top: 4,
        $format: 'JSON'
    });
    sethotList(getdata);
}

const IntroList = ({ title, type }) => {
    const [hotList, sethotList] = useState([]);

    useEffect(() => {
        if((title) === 'ActivityID'){
            fetchActivityData(sethotList);
        }

        if((title) === 'ScenicSpotID'){
            fetchScenicSpotData(sethotList);
        }

        if((title) === 'RestaurantID'){
            fetchRestaurantData(sethotList);
        }
    }, []);
    

    const GetCard=({ item, type, title, id })=>{
        if(type === 'AC'){
            return <ACard item={item} key={id}/>
        } else {
            return <PCard item={item} title={title} key={id}/>
        }
    }

    const ACard=({item, key})=>{
        return <ActivityCard key={key}
            item={item}
        />;
    }

    const PCard=({item, title, key})=>{
        return <PointCard 
            item={item}
            type={title}
            key={key}
        />;
    }

    var titleName = {
        ActivityID : '近期活動',
        ScenicSpotID : '熱門打卡景點',
        RestaurantID : '一再回訪的美食',
        otherActivity: '還有這些不能錯過的活動',
        otherPlace: '還有這些不能錯過的景點',
        otherRestaurant: '還有這些不能錯過的美食'
    }
    return (
        <div className="container p-5" id="newActivityBlock">
            <div className="containerTitleBox">
                <h1>{titleName[(title)]}</h1>
                <a href="/" className="moreBtn red mr-5 position-relative">查看更多活動</a>
            </div>
            <div className="d-flex flex-wrap Block">
                { hotList.map((item, index) => {
                    return <GetCard item={item} type={type} title={title} id={title+"-"+index}/>
                }) }
            </div>
        </div>
    );
  };
  
export default IntroList;