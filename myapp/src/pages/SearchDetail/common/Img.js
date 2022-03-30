const Img = ({data}) => {
    const { Picture } = data[0];
    const { PictureUrl1 = '', PictureDescription1 = '' } = Picture;
    return (
        <div className="container">
            <div id="Indexcarousel" className="carousel slide px-5 pt-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={PictureUrl1} className="d-block w-100" alt={PictureDescription1}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Img;