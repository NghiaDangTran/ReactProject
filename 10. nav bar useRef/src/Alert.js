import React, { useEffect } from 'react'

const Alert = ({alertClass,alertMess}) => {
  return <p className={alertClass}>{alertMess}</p>
}

export default Alert
