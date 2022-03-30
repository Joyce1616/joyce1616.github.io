import React from "react";
import { useState, useEffect } from "react";
import { requesScenicSpot } from "../../controller/apiManager";

const CarouselCard = ({ activity, active }) => {
    const { ScenicSpotName, Address = '', Picture = {} } = activity;
    const { PictureUrl1 = '', PictureDescription1 = '' } = Picture;
    const AddressP = Address.substr(0, 3);
    let act = '';
    if(active === 0){
        act = ' active'
    }
    return (
        <div className={"carousel-item"+(act)}>
            <p className="picName">{ScenicSpotName} | {AddressP}</p>
            <img src={PictureUrl1} className="d-block w-100" alt={PictureDescription1}/>
        </div>
    )
}
  
const Carousel = () => {
    const [carouselData, setCarousel] = useState([]);
    async function fetchRestaurantData(setCarousel){ //載入頁面取後端資料
        let filter = {
            $top: 4,
            $format: 'JSON'
        }
        const getdata = await requesScenicSpot('', filter);
        setCarousel(getdata);
    }
    
    useEffect(() => {
        fetchRestaurantData(setCarousel);
    }, []);

    return (
        <div className="container">
            <div id="Indexcarousel" className="carousel slide px-5 pt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#Indexcarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#Indexcarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#Indexcarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#Indexcarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    {carouselData.map((item, index) => {
                        return (
                        <CarouselCard 
                            key={item.ScenicSpotID} 
                            activity={item}
                            active={index}
                                />)
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#Indexcarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#Indexcarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
  
export default Carousel;