import React from 'react';
import Home from './Home';
import { Link, Routes, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail';
import New from './New'

function Layout(props) {
    return (
        <div>
            <ul>
                <Link className='btn btn-info' to="/">Trang chủ</Link>
                <Link className='btn btn-info' to="/them-san-pham" style={{margin:"30px"}}>Add product</Link>
            </ul>
            <Routes>
                <Route path='/' element={<Home></Home>} ></Route>
                <Route path='/them-san-pham' element={<New></New>} ></Route>
                
                <Route path='/chi-tiet-san-pham/:id' element={<ProductDetail></ProductDetail>} ></Route>

                {/* <Route path='/chi-tiet-san-pham/:id' element={} ></Route> */}
            </Routes>


        </div>
    );
}

export default Layout;