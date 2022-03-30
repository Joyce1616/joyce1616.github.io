const ResultBlock = () => {
    return (
        <div className="container p-5" id="hotClass">
        <div className="pageTitleBox px-2">
            <h1 className="pageTitle d-inline-block">搜尋結果</h1>
            <span className="d-inline-block">共 <strong className="orange">0</strong> 筆</span>
        </div>
        <div className="classBlock d-flex flex-wrap p-2">
            <div className="row">
                <div className="col-3 p-2">
                    <div className="imgBox">
                        <img src="" alt="" />
                    </div>
                    <h5 className="BoxTitle">2021 日月潭花火音樂節</h5>
                    <span className="ActivityLocate"><i className="fas fa-map-marker-alt"></i>&nbsp南投縣</span>
                </div>
                <div className="col-3 p-2">
                    <div className="imgBox">
                        <img src="" alt="" />
                    </div>
                    <h5 className="BoxTitle">2021 日月潭花火音樂節</h5>
                    <span className="ActivityLocate"><i className="fas fa-map-marker-alt"></i>&nbsp南投縣</span>
                </div>
            </div>
        </div>    
    </div>
    );
};

export default ResultBlock;