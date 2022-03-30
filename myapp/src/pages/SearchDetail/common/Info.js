import { useState, useEffect } from "react";

const Info = ({data, itemType}) => {
    const {Description} = data[0];
    const [tag, setTag] = useState([]);

    const getTitle = () => {
        const { ActivityName, ScenicSpotName, RestaurantName } = data[0];
        return ActivityName || ScenicSpotName || RestaurantName;
    };

    const getTag = () => {
        let arr = [];
        for (const [key, value] of Object.entries(data[0])) {
            if (key.includes("Class")){
                arr.push(`${value}`);
            } 
        }
        if (arr.length === 0) {
            arr.push("熱門打卡");
        }
        setTag(arr);
    };

    const InfoTitle = () => {
        switch (itemType) {
            case "ActivityID":
                return '活動介紹';
            case "ScenicSpotID":
                return '景點介紹';
            default:
                return '餐廳介紹';
        }
    };

    useEffect(() => {
        getTag();
    }, []);

    return (
        <div className="container p-5" id="pageContent">
            <div className="pageTitleBox px-2">
                <h1 className="pageTitle">{getTitle()}</h1>
                <div className="d-flex py-2">
                    {tag.map((item) => {
                        return <span className="badge badgeB-warning badgeB">{item}</span>
                    })}
                </div>
            </div>
            <div className="pageIntroBox p-2">
                <h3 className="subtitle">{InfoTitle()}</h3>
                <p className="introBox">
                    {Description}
                </p>
            </div>    
        </div>
    );
};

export default Info;