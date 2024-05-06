
import { Kmodel } from './canvas';
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
      <div>
        <Kmodel />
      </div>



    </>
  )
}

export default App; 
