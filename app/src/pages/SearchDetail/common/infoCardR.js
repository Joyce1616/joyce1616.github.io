const InfoCardR = ({data}) => {
    const {OpenTime, Phone, Address, WebsiteUrl} = data[0];
    return (
        <div className="info-card">
            <div className="info-item">
                <div className="info-item-title">營業時間</div>
                <div className="info-item-content">{OpenTime}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">聯絡電話</div>
                <div className="info-item-content">{Phone}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">餐廳地址</div>
                <div className="info-item-content">{Address}</div>
            </div>
            {/* <div className="info-item">
                <div className="info-item-title">官方網站</div>
                <div className="info-item-content">{WebsiteUrl}</div>
            </div> */}
        </div>
    );
};

export default InfoCardR;