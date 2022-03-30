import { useEffect, useState } from "react";
import { SetSelectDom } from '../../js/select.js';

const SearchBox = ({type}) => {
    const arr = [];
    arr['activity'] = 0;
    arr['spot'] = 1;
    arr['restaurant'] = 2;
    useEffect(() => { 
        SetSelectDom();

        selectElement('select-selected', arr[type])
        function selectElement(id, valueToSelect) {    
            let si = document.querySelector('.select-items');
            var i = arr[type];
            console.log(i);
            console.log(si.children[i]);
            si.children[i].click();
            si.style.display = "none";
        }
    }, [])

    // const [select, setSelect] = useState(type);
    // function changeSelect(e){
    //     setSelect(e.target.value);
    // }


    // const saveSearchData = () => {
    //     const dataObj = {
    //         keyword,
    //         type: selectedOption?.value,
    //     };
    //     dispatch(setSearchData(dataObj));
    //     history.push("/search");
    // };

    return (
        <div className="container">
            {type}
            <div className="p-5 d-flex flex-wrap">
                <div className="custom_select mb-1 mx-1 w25">
                    <select id="selectMode">
                        <option value='activity'>節慶活動</option>
                        <option value='spot'>探索景點</option>
                        <option value='restaurant'>品嚐美食</option>
                    </select>
                </div>
                <div className="position-relative d-flex flex-grow-1">
                    {/* <div className="input-group has-validation w33 m-0">
                        <input type="text" className="form-control pick dateStart mx-1 dropdown-toggle" id="" name="" />
                        <div className="input-group-prepend">
                            <span className="input-group-text" id=""><i className="fa fa-calendar green"></i></span>
                        </div>
                    </div> */}
                    <input type="text" className="form-control mb-1 flex-fill mx-1 w40" placeholder="你想去哪裡？請輸入關鍵字"/>
                    <button type="button" className="btn btn-primary flex-fill mx-1"><i className="fas fa-search"></i>搜   尋</button>
                </div>
                
            </div>
        </div>
    );
};

export default SearchBox;