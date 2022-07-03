import React from 'react';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { rqGetPagination } from '../actions/product'

import Card from "./Card"
function Home(props) {
    const [keyWord, setkeyWord] = useState('');
    const [pageSize, setpageSize] = useState(5);
    const [data, setData] = useState([]);
    const childToParent = (childdata) => {
        if (!data.includes(childdata))
            setData([...data, childdata]);
    }
    const products = useSelector(state => state.product.list)
    const dispatch = useDispatch()
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });

    }, []);


    useEffect(
        () => {
            const action = rqGetPagination(keyWord, pageSize);
            dispatch(action);

        }, [keyWord, pageSize]
    )


    const display = () => {
        return products.map((s, i) => {
            if (!data.includes(s.productId))
                return <Card key={i} product={s} childToParent={childToParent}></Card>
        })
    }
    const displayCondition = () => {
        return products.map((s, i) => {
            if (!data.includes(s.productId))
                return <Card key={i} product={s} childToParent={childToParent}></Card>
        })
    }
    const loadMore = () => {

        setpageSize(pageSize + 5)
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    const search = (e) => {
        const value = e.target.value;
        setkeyWord(value)
    }

    return (
        <div className="container">
            Search: <input onInput={(e) => search(e)} />

            <div className="row gx-03 justify-content-evenly">
                {display()
                }



            </div>
            <div className=" col d-flex flex-row3 justify-content-around" onClick={loadMore} style={{ width: '100%', padding: "30px" }}>
                <button className='btn btn-primary'>Load more</button>
            </div>
            {showButton && (
                <button onClick={scrollToTop} className="btn btn-primary " style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px"
                }}>
                    Up
                </button>
            )}
        </div>

    )
}

export default Home;
