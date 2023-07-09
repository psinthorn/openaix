import { useState } from 'react'

import axios from 'axios';


const Image = () => {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(false);

  return (
    <div>
      <h1>hello React and OpenAi :)</h1>
    </div>
  )
}

export default Image