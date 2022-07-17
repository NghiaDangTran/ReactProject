import React, { useState, useEffect, useMemo } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import Pagination from './pagination/Pagination';
import data from './tempdata.json'

function App() {
  const [PageSize, setPageSize] = useState(10)


  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize]);


  // useEffect(()=>{
  //   currentTableData
  // },[])

  return <main>
    <div className="section-title">
      <h1>pagination</h1>
      <div className="underline"></div>

      <section className='try'>
        <h3>Content per page:  </h3>
        <input type="number" value={PageSize} onChange={(e) => {

          if (!e.target.value)
            setPageSize(1);
          else if (e.target.value > data.length)
            setPageSize(data.length)
          else setPageSize(Number(e.target.value));
          setCurrentPage(1);
        }}



        />
      </section>
    </div>
    <section className="followers">
      <div className='container'>

        {currentTableData.map((i, index) => {

          return <Follower key={index} data1={i}></Follower>
        })}

      </div>
    </section>
    <div className='btn-container'>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />

    </div>
  </main>
}

export default App
