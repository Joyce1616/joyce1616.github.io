import HotTheme from './common/HotTheme.js';
import SearchBox from '../../components/Common/SeacrhBox';
import { useParams } from "react-router-dom";

const SearchDetail = () => {
    const { searchType } = useParams();
    return (
        <>
            <SearchBox type={searchType}/>
            <HotTheme/>
        </>
    );
  };
  
  export default SearchDetail;