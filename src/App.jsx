
import { About, Contact, Experience, Feedbacks, Navbar, Hero, Works, Tech } from './components'
import NewHero from './components/NewHero';

function App() {

  return (
    <section className=' overflow-x-hidden no-scrollbar'>

      {/* <div className='relative z-0'> */}
      <div>
        <div >
          <Navbar />
          <div className='block lg:hidden'>
            <Hero />

          </div>
          <div className='hidden lg:block'>
            <NewHero />
          </div>


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




    </section>
  )
}

export default App; 
