import React, { isValidElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { rqGetProductId } from '../actions/product'

function Update(props) {
    let currId = window.location.pathname.split("/")[2]

    const navigate = useNavigate();

    useEffect(
        () => {
            const action = rqGetProductId(currId);
            dispatch(action)

        }, []
    )
    const dispatch = useDispatch()
    const productDetail = useSelector(state => state.product.productDetail)
    console.log(productDetail)
    const [sample, setSample] = useState(<div className="card" style={{ width: '30rem' }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Sample</h5>
            <h6 className="card-title">Price: $Sample</h6>
            <p className="card-text">Sample</p>

        </div>
    </div>)




    const requiredMessage = 'Bạn phải nhập trường này'
    const schema = yup.object({
        ProductName: yup.string().required(requiredMessage),
        Image: yup.string().required(requiredMessage),
        Price: yup.number().required(requiredMessage),
        Content: yup.string().required(requiredMessage),
    })
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (values) => {
        let data = {
            "productId": currId,
            "productName": values.ProductName,
            "image": values.Image,
            "content": values.Content,
            "price": values.Price,
        }

        fetch('http://study.imic.edu.vn/api/product/update', {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(s => s.json())
            .then((data) => {

                if (data && data.statusCode === 200) {
                    navigate('/');
                }
            })

    }

    const changeSample = (values) => {



        setSample(<div className="card" style={{ width: '30rem' }}>
            <img src={values.Image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{values.ProductName}</h5>
                <h6 className="card-title">Price: ${values.Price}</h6>
                <p className="card-text">{values.Content}</p>

            </div>
        </div>)


    }
    return (
        <div className=" d-flex flex-row3 justify-content-around">

            <div className="card d-flex  justify-content-around" style={{ width: '30rem' }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: '30rem', padding: "20px" }}  >
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="ProductName"
                            placeholder="Ten san pham"
                            defaultValue={productDetail.productName}
                            {...register('ProductName')}

                        />

                        <small className="form-text text-muted">{errors.ProductName?.message}</small>

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="Image"
                            placeholder="hinh anh san pham"
                            defaultValue={productDetail.image}
                            {...register('Image')}
                        />
                        <small className="form-text text-muted">{errors.Image?.message}</small>

                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control"
                            name="Price"
                            placeholder="gia san pham"
                            defaultValue={productDetail.price }
                            {...register('Price')}

                        />
                        <small className="form-text text-muted">{errors.Price?.message}</small>

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="Content"
                            placeholder="Ten san pham"
                            defaultValue={ productDetail.content}
                            {...register('Content')}

                        />
                        <small className="form-text text-muted">{errors.Content?.message}</small>

                    </div>
                    <button className='btn btn-success' style={{ margin: "20px" }}>Tạo mới</button>
                    <button type="button" onClick={handleSubmit(changeSample)} className='btn btn-success' style={{ margin: "20px" }}>Preview</button>

                </form>

            </div>

            {sample}
        </div>
    );
}

export default Update;