
import { About, Contact, Experience, Feedbacks, Navbar, Hero, Works, Tech } from './components'
import NewHero from './components/NewHero';

function App() {

  return (
    <>

      {/* <div className='relative z-0'> */}
      <div>
        <div >
          <Navbar />
          <NewHero />
          {/* <Hero /> */}

        </div>

      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
      </div>




    </>
  )
}

export default App; 
