import ResultBlock from './common/ResultBlock.js';
import SearchBox from '../../components/Common/SeacrhBox';
import { useParams, useLocation } from "react-router-dom";
const SearchDetail = () => {
    return (
        <>
            <SearchBox/>
            <ResultBlock/>
        </>
    );
  };
  
  export default SearchDetail;