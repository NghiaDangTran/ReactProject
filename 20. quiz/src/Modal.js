import React, { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
import { BiArrowBack } from "react-icons/bi";
import sanitizeHtml from "sanitize-html";
// import leader from './leader';

function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
const Modal = () => {
  const { user, data, setGame, setShowList } = useGlobalContext()
  const [show, setShow] = useState(false)
  const [curr, setCurr] = useState(0)
  const [ans, setAns] = useState([])
  const [score, setScore] = useState(Array(data.length).fill(0))
  const [print, setPrint] = useState(0)
  // console.log(data[curr].correct_answer);

  useEffect(() => {
    console.log(data[curr].correct_answer)

    if (data[curr].type == "multiple") {

      let anw = data[curr].incorrect_answers
      if (ans) {
        if (!anw.includes(data[curr].correct_answer))
          anw.push(data[curr].correct_answer)
        anw = shuffle(anw)

        setAns(anw)
      }




    }
    else {
      setAns(["True", "False"])
    }
  }, [curr])
  const handelForm = () => {

    return <article className='container'><h2>

      <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(data[curr].question) }} />

    </h2>
      <div className='btn-container'>
        {ans.map((i, index) => {
          return <button key={index} className='answer-btn'
            onClick={(e) => {

              if (e.target.innerText === htmlEntities(data[curr].correct_answer)) {
                score[curr] = 1
                const newScore = score
                setScore(newScore)
                setPrint(score.reduce((curr, next) => curr + next))



              }
              if (e.target.innerText !== htmlEntities(data[curr].correct_answer)) {

                score[curr] = 0
                const newScore = score
                setScore(newScore)
                setPrint(score.reduce((curr, next) => curr + next))
              }

              if (curr + 1 < data.length)
                setCurr(curr + 1)
              else {
                setShow(true)
                const date = new Date()


                // leader.push({
                //   user, score: `${print}/${data.length}`, date
                // })
                // console.log(leader)
               

              }

            }}>
            <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(i) }} />

          </button>
        })}

      </div>


    </article>
  }
  return <main>
    <div className={`modal-container ${show && "isOpen"}`}>
      <div className='modal-content'>
        <h2>congrats!!!</h2>
        <p>you answer right {print} question{print > 1 && "s"}</p>
        <button className='close-btn' onClick={() => {
          setGame(false)
          const time = new Date()

        }}>play again</button>
        <button className='close-btn' onClick={() => {
          setGame(false)
          setShowList(true)
        }}>Leader board</button>
      </div>
    </div>
    <section className='quiz'>

      <p className="correct-answers">
        <span className='stat-btn' onClick={() => setGame(false)} ><BiArrowBack /></span>
        correct answers : {print}/{data.length}</p>
      {handelForm()}

      <div className='question'>
        {curr - 1 >= 0 && <button className='past-question' onClick={() => {


          setCurr(curr - 1)

        }}>past question</button>}
        {curr + 1 < data.length && <button className='next-question' onClick={() => {


          setCurr(curr + 1)


        }}>{curr + 1 < data.length ? "Next question" : "Last question"}</button>}

      </div>

    </section>

  </main>
}

export default Modal
