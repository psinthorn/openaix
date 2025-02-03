// import logo from '../assets';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCheckSquare,faCoffee } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <header className='flex flex-col  w-full justify-center items-center'>
      <Navbar />
      <h1 className='head_text py-32'>Powering the Future with AI, IoT & Cloud Innovation
        <br className='max-md:hidden'/>
        <span className="orange_gradient">Innovate. Automate. Elevate.</span>
      </h1>
      <h2 className='desc'>
      Mission to empower businesses through smart technologies. Start Now<FontAwesomeIcon className='pl-1' icon={faAngleRight} />
      </h2>
    </header>
  )
}

export default Hero