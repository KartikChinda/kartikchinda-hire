
import { About, Contact, Experience, Feedbacks, Navbar, Hero, Works, Tech } from './components'
import NewHero from './components/NewHero';

function App() {

  return (
    <section className=' overflow-x-hidden text-[#ece6df]'>

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
      <div className='text-[#ece6df]'>
        <Works />

      </div>
      <Feedbacks />
      <div>
        <Contact />
      </div>




    </section>
  )
}

export default App; 
