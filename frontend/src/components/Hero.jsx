// import logo from '../assets';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCheckSquare,faCoffee } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <header className='flex flex-col  w-full justify-center items-center'>
      <Navbar />
      <h1 className='head_text'>Generate your post and image Banner with
        <br className='max-md:hidden'/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Draft your post and image banner in one click with AI Power then re-arrage it to your own styles let's  get start now<FontAwesomeIcon className='pl-1' icon={faAngleRight} />
      </h2>
    </header>
  )
}

export default Hero