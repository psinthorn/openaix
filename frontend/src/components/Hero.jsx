// import logo from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCheckSquare,faCoffee } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <header className='flex flex-col  w-full justify-center items-center'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <label className='text-xl font-bold orange_gradient'><FontAwesomeIcon icon={faCheckSquare} /> OpenAI<span className="text-gray-600">x*</span></label>
        <button type="button" className='black_btn'>
          Login
        </button>
      </nav>
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