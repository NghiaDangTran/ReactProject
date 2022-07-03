//lấy danh sách sản phẩm theo trang
//action có type và có payload 
const initialState = { list: [], productDetail: {} }
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PAGINATION': {
            return {
                ...state,
                list: action.payload
            }
        }
        case 'GET_PRODUCT_DETAIL': {
            
            return {
                ...state,
                productDetail: action.payload

            }
        }
        default:
            {
                return {
                ...state
                }
            }

    }
}
export default productReducer