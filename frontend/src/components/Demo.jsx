import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight, faCheckSquare,faCoffee, faEye, faLink, faList, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEye, faLink, } from '@fortawesome/free-solid-svg-icons';
import { useLazyGetSummaryQuery } from '../services/article';
import './../styles/Globals.css';
import { ReactComponent as Copy } from './../assets/copy.svg';
import { ReactComponent as Tick } from './../assets/tick.svg'
import { ReactComponent as Loader } from './../assets/loader.svg';


//import { ReactComponent as copyIcon } from '../assets/copy.svg'


const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })
  const [articles, setArticles] = useState([]);
  const [copied, setCopied] = useState(true);

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleOnChange = (event) => {
    event.preventDefault();
    setArticle({ ...article, url: event.target.value})
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)
    console.log(copied);
    setTimeout(() => setCopied(false), 2000);
  };

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
                <div className='copy_btn' onClick={() => (handleCopy(article.url))}>
                  <div className='object-contain w-[40%] h-[40%]'>
                    {copied === article.url ? (<Tick />) : (<Copy />) }                   
                  </div>
                </div>
                <p className='flex-1 font-medium font-satoshi text-sm text-blue-500 truncate '>
                  {article.url}
                </p>
              </div>
            ))}
          </div>
          {/* display summarizer result */}
          <div className='flex justify-center items-center max-w-full my-10'>
              {isFetching ? (<Loader />) : error ? (
                <p className='font-inter font-bold text-red-500 text-center'>Can't summarize you given URL please try another website
                  <br />
                  <span className='font-satosho font-normal font-gray-700'>
                    {error?.data?.error}
                  </span>
              </p>
              ) : (
                article.summary && (
                  <div className='flex flex-col gap-3'>
                    <h2 className='font-satoshi font-bold text-gray-700 text-xl text-center'>
                      Article <span className='blue_gradient'>Summary</span>
                    </h2>
                    <div className='summary_box'>
                      <p className='font-inter font-meduim text-sm text-gray-700'>
                        {article.summary}
                        
                      </p>
                    </div>
                  </div>
                )
              )}
          </div>
      </div>        
    </section>
  )
}

export default Demo