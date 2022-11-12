import { useEffect, useState } from 'react';
import './App.css';
import { Configuration, OpenAIApi } from 'openai';

const App = () => {

  let [search, setSearch] = useState("")
  let[query, setQuery] = useState("a bowl of soup that is also a portal to another dimension, digital art")
  let [image, setImage] = useState([])
  let searchHandler = (event) => {
    setSearch(event.target.value)
  }

  

  useEffect(() => {
    generateImage()
  },[query])

  const configuration = new Configuration(
    {
      apiKey: process.env.REACT_APP_OPENAI_API_KEY
    }
  )

  const openai = new OpenAIApi(configuration)

  const generateImage = async () =>{
    const response = await openai.createImage({
      prompt: query,
      n:2,
      size:"512x512"
    })
    setImage(response)
  }

  let searchImage = (event) => {
    event.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <p className='app-title'> AI-Image-Generator </p>
          <div className='image-generating-form'>
            <input type="search" className='search-bar' placeholder='example: a bowl of soup that is also a portal to another dimension, digital art' onChange={searchHandler}/>
            <button type='submit' className='generate-btn' onClick={searchImage}>Generate Image</button>
          </div>
        </div>

        <div className='image-container'>
          <img src={image.data?.data[0].url} className="image" alt='1'/>
          <img src={image.data?.data[1].url} className="image" alt='2'/>
        </div>
      </div>
    </div>
  );
}

export default App;
