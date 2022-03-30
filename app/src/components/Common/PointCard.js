import { Link } from "react-router-dom";
import Pic from "../../images/default-card-picture.png";
import { useNavigate } from "react-router-dom";

const PointCard = ({item, type}) => {
    let path;
    let navigate = useNavigate();
    const getTitle = (item) => {
        const { ActivityName, ScenicSpotName, RestaurantName } = item;
        return ActivityName || ScenicSpotName || RestaurantName;
    };

    if(type === 'RestaurantID'){
        path = '/searchdetail/'+item.RestaurantID+ '/RestaurantID';
    } else if(type === 'ScenicSpotID') {
        path = '/searchdetail/'+item.ScenicSpotID+ '/ScenicSpotID';
    } else {
        path = '/searchdetail/'+item.ActivityID+ '/ActivityID';
    }
    const { Address, Picture} = item;
    const { PictureUrl1 = Pic, PictureDescription1 = '' } = Picture;
    var locate = Address.substr(0,10);
    return (
        <div className="col-md-3 col-sm-6 hotLocateBox p-2" onClick={() => {
            navigate(path);
        }}>
            <div className="imgBox">
                <img src={PictureUrl1} alt={PictureDescription1}/>
            </div>
            <h5 className="BoxTitle">{getTitle(item)}</h5>
            <span className="ActivityLocate"><i className="fas fa-map-marker-alt"></i> {locate}</span>
        </div>
    );
  };
  
export default PointCard;