import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { rqGetProductId } from '../actions/product'

ProductDetail.propTypes = {

};

function ProductDetail(props) {
    let currId = window.location.pathname.split("/")[2]

    useEffect(
        () => {
            const action = rqGetProductId(currId);
            dispatch(action)

        }, []
    )
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.product.productDetail)
    const { id } = useParams();

    return (
        <div className=" d-flex flex-row3 justify-content-around">
            {/* <h3>{productDetail.productName}</h3>
            <p>Giá sản phẩm: {productDetail.price}</p>
            <p>{productDetail.content}</p>
            <img src={productDetail.image} ></img> */}
         

            <div className="card" style={{ width: '30rem' }}>
                <img src={productDetail.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{productDetail.productName}</h5>
                    <h6 className="card-title">Price: ${productDetail.price}</h6>
                    <p className="card-text">{productDetail.content}</p>

                </div>
            </div>

        </div>
    );
}

export default ProductDetail;