import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ScrollToTop = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    useEffect(() => {
        const unlisten = (() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [location]);

    return null;
}

export default ScrollToTop;