import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCheckSquare,faCoffee } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <label className='text-xl font-bold orange_gradient'><FontAwesomeIcon icon={faCheckSquare} /> OpenAI<span className="text-gray-600">x*</span></label>
        <div className="flex gap-4">
          <div className='pt-1 black_btn rounded-none bg-transparent'>Get an Ideas</div>
          <div className='pt-1 black_btn rounded-none bg-transparent'>Generate an Image</div>
          <div className='pt-1 black_btn rounded-none bg-transparent'>Article Summarizer</div>
          <button type="button" className='black_btn'>
            Login
          </button>
        </div>
        
    </nav>
  )
}

export default Navbar