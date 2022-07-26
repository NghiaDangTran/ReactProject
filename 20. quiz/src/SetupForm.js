import React from 'react'
import { useGlobalContext } from './context'
import { VscGraph } from 'react-icons/vsc';
import table from './table'
// const [gameSetting,setGameSetting]=useState({
//   amount:10,
//   category:null,
//   difficulty:null,
//   typeof:null


// })
const SetupForm = () => {
  const { user, setUser, setShowList, gameSetting, setGameSetting, setGame, game, fetchData } = useGlobalContext()
  const handelsubmit = (e) => {
    e.preventDefault()
    setGame(true)
    console.log(gameSetting);

    fetchData()
  }
  return <section className='quiz quiz-small'>
    <form action="" className='setup-form' onSubmit={handelsubmit}>

      <div className='customdiv'>
        <h2>setup quiz</h2>
        <a className='stat-btn' onClick={() => setShowList(true)}><VscGraph></VscGraph></a>

      </div>

      <div className='form-control'>
        <label htmlFor='amout'>Player name</label>
        <input className='form-input' type="text" required autoFocus value={user} onChange={(e) => { setUser(e.target.value) }} />
      </div>

      <div className='form-control'>
        <label htmlFor='amout'>number of questions</label>
        <input className='form-input' type="number" value={gameSetting.amount} min={1} max={50} onChange={e => {
          const val = e.target.value
          if (val < 1)
            setGameSetting({ ...gameSetting, amount: 1 })
          else if (val > 50)
            setGameSetting({ ...gameSetting, amount: 50 })

          else
            setGameSetting({ ...gameSetting, amount: val })




        }} />
      </div>
      <div className='form-control'>
        <label htmlFor='category'>category</label>
        <select name="" id="" className='form-input' onChange={e => {
          setGameSetting({ ...gameSetting, category: parseInt(e.target.value) })
        }}>
          <option value={null} >Any Category</option>
          {table.map((i, index) => {
            const { id, name } = i
            return <option key={index} value={id}>{name}</option>
          })}

        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='category'>Difficulty</label>
        <select name="" id="" className='form-input' onChange={e => {
          setGameSetting({ ...gameSetting, difficulty: e.target.value })
        }} >
          <option value={null}>Any Category</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>


        </select>
      </div>
      <div className='form-control'>
        <label htmlFor='category'>Type</label>
        <select name="" id="" className='form-input' onChange={e => {
          setGameSetting({ ...gameSetting, typeof: e.target.value })
        }}>
          <option value={null}>Any Type</option>
          <option value="multiple">Mutiple choice</option>
          <option value="boolean">True / False</option>


        </select>
      </div>
      <button className='submit-btn' type='submit'>start</button>
    </form>

  </section>
}

export default SetupForm
