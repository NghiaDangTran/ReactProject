import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { useGlobalContext } from './context'
import ListShow from './ListShow';

function Stat(props) {
    const { setShowList } = useGlobalContext()
    return (
        <section className='quiz'>
            <a className='stat-btn' onClick={() => setShowList(false)}><BiArrowBack></BiArrowBack></a>

            <h2 style={{ textAlign: "center" }}>Leader board</h2>

            <div style={{
                display: "flex",
                justifyContent: "center"
                ,margin:"1.5rem"
            }}>


                <a className='leader-btn'>7days</a>
                <a className='leader-btn'>15days</a>
                <a className='leader-btn'>30days</a>
                <a className='leader-btn'>all</a></div>

 <ListShow></ListShow>
        </section>

    );
}

export default Stat;