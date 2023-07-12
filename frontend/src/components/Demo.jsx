import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckSquare,faCoffee, faEye, faLink, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleOnChange = (event) => {
    event.preventDefault();
    console.log(article.url);
    setArticle({ ...article, url: event.target.value})
    console.log(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(article.url);
    const { data } = await getSummary({ articleUrl: article.url });
    console.log('data:' ,data);

    if(data?.summary){
      const newArticle = {...article, summary: data.summary}
      setArticle(newArticle);
      console.log(article);
    }
    
  }

  return (
    <section className='w-full mt-16 max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center "
        >
          <FontAwesomeIcon icon={faLink}  className='absolute left-0 w-5 my-2 ml-5 ' />
          <input 
            type="url"
            placeholder='Enter a URL'
            value={article.url}
            onChange={handleOnChange}
            required
            className='url_input peer ml-1'
          /> 
          <button
            type="submit"
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
          >
            <FontAwesomeIcon icon={faEye}  className='' />
          </button>
          
          {/* Broswer URL history  */}



        </form>
      </div>
          {/* Display result */}
    </section>
  )
}

export default Demo