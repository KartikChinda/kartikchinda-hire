
import { About, Contact, Experience, Feedbacks, Navbar, Hero, Works, Tech, Loader } from './components'

function App() {

  return (
    <>

      {/* <div className='relative z-0'> */}
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
          {/* <Loader /> */}
        </div>
      </div>


    </>
  )
}

export default App; 
