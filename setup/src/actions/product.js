export const rqGetPagination = (keyWord, pageSize) => {
    
    // gọi api và lấy dữ liệu
    let model = { PageSize: pageSize, PageIndex: 1, KeyWord: keyWord }
    return dispatch => {
        fetch('http://study.imic.edu.vn/api/product/get-pagination', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(model)
        })
            .then(s => s.json())
            .then((data) => {
                
                dispatch(GetPagination(data))
            })
    }

}

export const GetPagination = (data) => {
    return {
      
        type: 'GET_PAGINATION',
        payload: data
    }
}
// lấy sản phẩm chi tiết
export const rqGetProductId = (productId) => {
    
    return dispatch => {
        fetch('http://study.imic.edu.vn/api/product/' + productId)
            .then(s => s.json())
            .then((data) => {
                dispatch(GetProductId(data))
            })
    }
}

export const GetProductId = (data) => {
    return {
        type: 'GET_PRODUCT_DETAIL',
        payload: data
    }
}

