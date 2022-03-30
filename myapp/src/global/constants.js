export const API_HOST = "http://localhost:3000";
export const API_GET_DATA = `${API_HOST}/note/1`;

export const CITY_OPTIONS = {
    Taipei: "臺北市",
    NewTaipei: "新北市",
    Taoyuan: "桃園縣",
    Taichung: "臺中市",
    Tainan: "臺南市",
    Kaohsiung: "高雄市",
    Keelung: "基隆市",
    Hsinchu: "新竹市",
    HsinchuCounty: "新竹縣",
    MiaoliCounty: "苗栗縣",
    ChanghuaCounty: "彰化縣",
    NantouCounty: "南投縣",
    YunlinCounty: "雲林縣",
    ChiayiCounty: "嘉義縣",
    Chiayi: "嘉義市",
    PingtungCounty: "屏東縣",
    YilanCounty: "宜蘭縣",
    HualienCounty: "花蓮縣",
    TaitungCounty: "臺東縣",
    KinmenCounty: "金門縣",
    PenghuCounty: "澎湖縣",
    LienchiangCounty: "連江縣",
};

export const TYPE_LIST = [
    { value: "activity", label: "節慶活動" },
    { value: "spot", label: "探索景點" },
    { value: "restaurant", label: "品嚐美食" },
];

export const MENU_LIST = [
    { name: "探索景點", path: "spot" },
    { name: "節慶活動", path: "activity" },
    { name: "品嚐美食", path: "restaurant" },
];