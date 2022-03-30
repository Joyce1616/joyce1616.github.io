import InfoCardAct from "./InfoCardAct";
import InfoCardR from "./infoCardR";
import InfoCardS from "./InfoCardS";

const DetailInfo = ({data, itemType}) => {
    const InfoCard = () => {
        switch (itemType) {
            case "ActivityID":
                return <InfoCardAct data={data} />;
            case "ScenicSpotID":
                return <InfoCardS data={data} />;
            default:
                return <InfoCardR data={data} />;
        }
    };
    
    return (
        <div className="col-6 p-2">
            <InfoCard/>
        </div>
    );
};

export default DetailInfo;