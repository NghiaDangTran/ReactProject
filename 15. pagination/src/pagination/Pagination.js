import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './pagination.scss';
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    console.log(
        totalCount,
        
        currentPage,
        pageSize,
        className);

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if (currentPage + 1 > Math.ceil(totalCount / pageSize))
            onPageChange(1);
        else
            onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        if (currentPage - 1 <= 0)
            onPageChange(Math.ceil(totalCount / pageSize));
        else
            onPageChange(currentPage - 1);
    };

    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            <li
                className="pagination-item"
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map((pageNumber,index) => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li key={index}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className="pagination-item"
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;
