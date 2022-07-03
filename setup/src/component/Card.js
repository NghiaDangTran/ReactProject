import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Card(props) {
    const { product } = props;
    const [data, setData] = useState([]);
    let addDel = (id) => {
        if (!data.includes(id)) {

            setData([...data, id])
            // childToParent(data)
        }
        props.childToParent(id)


    }

    if (product===null)
    return (<></>);
    return (

        <div className="col-lg-4 col-md-12">
            <div className=" card  " style={{ width: '18rem', margin: "30px" }}>
                <img src={product.image}
                    className="card-img-top" alt={product.productName} />
                <h3 className="d-flex flex-row3 justify-content-around">{product.productName}</h3>
                <div className="card-body d-flex flex-row3 justify-content-around " style={{ margin: "5px" }}>
                    {/* link to product detail */}
                    <Link to={`/chi-tiet-san-pham/${product.productId} `} className="btn btn-primary " style={{ width: '5rem' }}>Detail</Link>
                    {/* <Link to={`/chi-tiet-san-pham/${product.productId} `}>Xem chi tiết</Link> */}

                    {/* link to delete product */}
                    <button onClick={() => addDel(product.productId)} className="btn btn-primary" style={{ width: '5rem' }}>Delete</button>
                    {/* <Link to="/products" className="btn">backto product</Link> */}

                </div>

            </div>
        </div>
    );
}

export default Card;