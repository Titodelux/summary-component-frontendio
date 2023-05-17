import './App.css'
import Grades from './components/Grades'
import data from '../data.json'

function App() {
  return (
    <>
      <main className='main-card'>
        <section className='main-card__score-card'>
          <h1>Your Result</h1>

          <article className='score-counter'>
            <h2>{data.result.grade}</h2>
            <p>of 100</p>
          </article>

          <h2>{data.result.qualitative}</h2>
          <p>{data.result.description}</p>
        </section>

        <section className='main-card__summary-card'>
          <h3>Summary</h3>
          {
            data.summary.map(element => (
              <Grades 
                key={element.category} 
                category={element.category} 
                score={element.score} 
                icon={element.icon}/>
            ))
          }
          <button className='main-card__button'>Continue</button>
        </section>
      </main>
    </>
  )
}

export default App
