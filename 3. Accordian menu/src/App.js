import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [question, SetQuestion] = useState(data)
  return <main>
    <div className="container">
      <h3>question and answer about login</h3>
      <section className='info'>

        {question.map((q) => {
          return <SingleQuestion key={question.id} {...q}>

            
          </SingleQuestion>
        })}


      </section>
    </div>


  </main>
}

export default App;
