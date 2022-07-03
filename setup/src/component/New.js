import React, { isValidElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
function New(props) {
    const crypto = require("crypto");
    const id = crypto.randomBytes(16).toString("hex");

    const [sample, setSample] = useState(<div className="card" style={{ width: '30rem' }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Sample</h5>
            <h6 className="card-title">Price: $Sample</h6>
            <p className="card-text">Sample</p>

        </div>
    </div>)



    let isImage = (uri) => {
        uri = uri.split('?')[0];
        //moving on now
        var parts = uri.split('.');
        var extension = parts[parts.length-1];
        var imageTypes = ['jpg','jpeg','tiff','png','gif','bmp']
        console.log(extension)
        if(imageTypes.indexOf(extension) !== -1) {
            return true;   
        }
    }
    const requiredMessage = 'Bạn phải nhập trường này'
    const schema = yup.object({
        ProductName: yup.string().required(requiredMessage),
        Image: yup.string().required(requiredMessage),
        Price: yup.string().required(requiredMessage),
        Content: yup.string().required(requiredMessage),
    })
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (values) => {
        // let data={
        //     "ProductId":id,
        //     "ProductName": values.ProductName,                      
        //     "Image":values.Image,
        //     "Content":values.Content,
        //     "Price":values.Price,
        // }

        // Request({
        //     url: "http://study.imic.edu.vn/api/product/add",
        //     method: "POST",
        //     json: data
        //   }, function (err, res, body) {
        //     console.log(body);
        //   });

    }

    const changeSample = (values) => {

        if (isValid) {
            
            setSample(<div className="card" style={{ width: '30rem' }}>
                <img src={values.Image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{values.ProductName}</h5>
                    <h6 className="card-title">Price: ${values.Price}</h6>
                    <p className="card-text">{values.Content}</p>

                </div>
            </div>)
        }

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
                            {...register('Image')}
                        />
                        <small className="form-text text-muted">{errors.Image?.message}</small>

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="Price"
                            placeholder="gia san pham"
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

export default New;