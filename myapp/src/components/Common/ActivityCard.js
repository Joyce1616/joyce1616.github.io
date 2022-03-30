import Pic from "../../images/default-card-picture.png";
import { Link } from "react-router-dom";

const ActivityCard = ({item}) => {
    const {ActivityName, Location, EndTime, StartTime, Picture, ActivityID} = item;
    const { PictureUrl1 = Pic, PictureDescription1 = '' } = Picture;
    const ActStartTime = (StartTime).substr(0, 10).replace(/-/g, '/');
    const ActEndTime = (EndTime).substr(0, 10).replace(/-/g, '/');
    let path = '/searchdetail/'+ActivityID+ '/ActivityID';
    return (
        <div className="ActivityBox m-2">
            <div className="imgBox">
                <img src={PictureUrl1} alt={PictureDescription1}/>
            </div>
            <div className="ActivityContent px-4 py-3">
                <span className="date">{ActStartTime} - {ActEndTime}</span>
                <h5 className="BoxTitle">{ActivityName}</h5>
                <span className="ActivityLocate"><i className="fas fa-map-marker-alt"></i>{Location}</span>
                <Link to={path} className="moreBtn green">詳細介紹</Link>
            </div>
        </div>
    );
  };
  
export default ActivityCard;