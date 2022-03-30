const Other = () => {
    // const {Description, ActivityName, Class1} = data[0];
    return (
        <div>
            <h3 className="subtitle">周邊資訊</h3>
            <div className="d-flex">
                <div className="card-Btn flex-fill">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>附近景點</span>
                </div>
                <div className="card-Btn flex-fill">
                    <i className="fas fa-calendar-alt"></i>
                    <span>附近活動</span>
                </div>
                <div className="card-Btn flex-fill">
                    <i className="fas fa-utensils"></i>
                    <span>附近美食</span>
                </div>
            </div>
        </div>
    );
};

export default Other;