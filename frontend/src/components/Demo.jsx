import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight, faCheckSquare,faCoffee, faEye, faLink, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEye, faLink, } from '@fortawesome/free-solid-svg-icons';
import { useLazyGetSummaryQuery } from '../services/article';
import './../styles/Globals.css';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })
  const [articles, setArticles] = useState([]);

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleOnChange = (event) => {
    event.preventDefault();
    setArticle({ ...article, url: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if(!data.summary) {
      console.assert.log("Not enought for summarizer")
      return;
    }
    console.log('data:' ,data.summary);
    if(data?.summary){
      const newArticle = {...article, summary: data.summary}
      const updateArticles = [newArticle, ...articles]
      setArticle(newArticle);
      setArticles(updateArticles)
      console.log(article);
      console.log('articles: ', articles);

      localStorage.setItem("articles", JSON.stringify(articles));
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
        </form>
         {/* Display brow history that store in local storage */}
         <div className='flex flex-col mt-10 gap-1 max-h-50 overflow-y-auto'>
            { articles.map((article, index) => (
              <div 
              key={`link-${index}`}
              onClick={() => setArticle(article)}
              className='link_card'
              >
                <div className='copy_btn'>
                  <img
                    src={''}
                    alt='copy icon'
                    className='object-contain w-[40%] h-[40%]'
                  />
                </div>
                <p className='flex-1 font-medium font-satoshi text-sm text-blue-500 truncate '>
                  {article.url}
                </p>
              </div>
            ))}
          </div>
      </div>        
    </section>
  )
}

export default Demo