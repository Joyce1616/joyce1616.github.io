const InfoCardS = ({data}) => {
    const {OpenTime, Phone, Address, TicketInfo} = data[0];
    return (
        <div className="info-card">
            <div className="info-item">
                <div className="info-item-title">開放時間</div>
                <div className="info-item-content">{OpenTime}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">服務電話</div>
                <div className="info-item-content">{Phone}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">景點地址</div>
                <div className="info-item-content">{Address}</div>
            </div>
            <div className="info-item">
                <div className="info-item-title">票價資訊</div>
                <div className="info-item-content">{TicketInfo}</div>
            </div>
        </div>
    );
};

export default InfoCardS;