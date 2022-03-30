const InfoCardAct = ({data, itemType}) => {
    const {StartTime, EndTime, Organizer, Location} = data[0];
    const ActStartTime = (StartTime).substr(0, 10).replace(/-/g, '/');
    const ActEndTime = (EndTime).substr(0, 10).replace(/-/g, '/');
    return (
        <div className="info-card">
            <div className="info-item">
                <div className="info-item-title">開放時間</div>
                <div className="info-item-content">{ActStartTime} - {ActEndTime}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">主辦單位</div>
                <div className="info-item-content">{Organizer}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">活動地點</div>
                <div className="info-item-content">{Location}</div>
            </div>
        </div>
    );
};

export default InfoCardAct;