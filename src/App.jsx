
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Navbar, Hero, Works, Tech, Loader } from './components'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <div >
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <Loader />
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App
