import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import getContrastRatio from './luminaty'
const SingleColor = ({ rgb, weight, hex, index }) => {

  let a = getContrastRatio(rgb, [0, 0, 0])
  let b = getContrastRatio(rgb, [255, 255, 25])


  const [arlet, setArlet] = useState(false)
  useEffect(() => {
    let Timeout = setTimeout(() => { setArlet(false) }, 2000)
    return () => clearTimeout(Timeout)

  }, [arlet])
  return <>
    <article className={`d-flex flex-row align-items-center color ${a > b ? "false" : "color-light"} `} onClick={() => { setArlet(true); navigator.clipboard.writeText(`#${hex}`) }} style={{ backgroundColor: `#${hex}` }}>

      <div className='d-flex flex-column   justify-content-center' >
        <div><p className="percent-value">{weight}%</p></div>
        <div> <p className="color-value">{`#${hex}`}</p></div>
        <div>  {arlet && <p className='arlet'>you copy to clip board</p>}</div>



      </div>

    </article>

  </>

}

export default SingleColor
