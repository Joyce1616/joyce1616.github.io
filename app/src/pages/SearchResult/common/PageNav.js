const PageNav = () => {
    return (
        <div className="p-4">
            <ul className="pageNav d-flex flex-nowrap justify-content-center">
                <li className="pageNav-item pageNav-last"> </li>
                <li className="pageNav-item">1</li>
                <li className="pageNav-item">2</li>
                <li className="pageNav-item">...</li>
                <li className="pageNav-item">9</li>
                <li className="pageNav-item">10</li>
                <li className="pageNav-item pageNav-prev"> </li>
            </ul>
        </div>
    );
};

export default PageNav;