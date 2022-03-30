// import { CITY_OPTIONS } from "../../global/";
import { TYPE_LIST } from "../../global/constants.js";
import { useState,} from "react";
import { useNavigate } from "react-router";
const Header = () => {
    const [selectType, setSelectType] = useState(TYPE_LIST[1]);
    // function typeChange(e){
    //     console.log(selectType);
    //     console.log('555');
    //     setSelectType(e.target.value)
    // }
    const [keyword, setkeyword] = useState('');
    function keywordChange(e){
        setkeyword(e.target.value)
    }
    const navigate = useNavigate();
    const saveSearchData = () => {
        const dataObj = {
          keyword,
          type: selectType.value,
        };
        var kkk = document.getElementById('selectTypes').value
        // console.log(kkk);
        if(dataObj.keyword === ''){
            navigate("/searchpage/"+ kkk);
        } else {
            navigate("/searchresult/"+ kkk +"/" + keyword);
        }
    };

    return (
        <div className="container p-5" id="header">
            <div className="row">
                <div className="col-lg-7 col-md-12 p-5">
                    <h1>探索<span>台灣之美</span></h1>
                    <h1>讓我們更親近這片土地</h1>
                    <p className="gray mt-3"><i className="fas fa-map-marker-alt greenL"></i>  台灣旅遊景點導覽 Taiwan Travek Guide</p>
                </div>
                <div className="col-lg-5 col-md-12 p-5">
                    <div className="custom_select mb-1">
                        <select id="selectTypes" className="select">
                            {/* <option value="">全部縣市</option>
                            {Object.keys(CITY_OPTIONS).map((cityKey) => (
                                <option key={cityKey} value={cityKey}>
                                {CITY_OPTIONS[cityKey]}
                                </option>
                            ))} */}
                            <option value="activity">節慶活動</option>
                            <option value="spot">探索景點</option>
                            <option value="restaurant">品嚐美食</option>
                        </select>
                    </div>
                    <input type="text" value={keyword} onChange={keywordChange} className="form-control mb-1" id="" placeholder="你想去哪裡？請輸入關鍵字"/>
                    <button type="button" className="btn btn-primary btnW100" onClick={saveSearchData}><i className="fas fa-search"></i>搜尋</button>
                </div>
            </div>
        </div>
    );
  };
  
export default Header;