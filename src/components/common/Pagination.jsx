import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';

const Pagination = (props) => {
    const {itemsCount, pageSize, onPageChange,currentPage}=props;
    const pageCount=Math.ceil(itemsCount/pageSize);
    const pages=_.range(1,pageCount+1);
    if(pages==1) return null;
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
                {pages.map(item=> <li key={item} className={currentPage===item?"page-item active":"page-item"}><a onClick={()=>onPageChange(item)} class="page-link" >{item}</a></li>)} 
            </ul>
        </nav>
    );
};
Pagination.propTypes={
    itemsCount:propTypes.number
}
export default Pagination;