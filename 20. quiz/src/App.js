import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import Stat  from './Stat'
function App() {
  const {loading,game,showList}=useGlobalContext()

  return <main>
  
{loading? <Loading></Loading>:showList?<Stat></Stat>:!game? <SetupForm></SetupForm>: <Modal></Modal>}

   
   
  </main>
}

export default App
