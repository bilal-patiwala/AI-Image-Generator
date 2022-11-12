import { useEffect, useState } from 'react';
import './App.css';
const App = () => {

  let [search, setSearch] = useState("")
  let[query, setQuery] = useState("")
  
  let searchHandler = (event) => {
    setSearch(event.target.value)
  }

  let generateImage = (event) =>{
    event.preventDefault()
    setQuery(search)
    setSearch("")
  }

  useEffect(() => {
    console.log(query);
  },[query])

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <p className='app-title'> AI-Image-Generator </p>
          <div className='image-generating-form'>
            <input type="search" className='search-bar' placeholder='example: a bowl of soup that is also a portal to another dimension, digital art' onChange={searchHandler}/>
            <button type='submit' className='generate-btn' onClick={generateImage}>Generate Image</button>
          </div>
        </div>

        <div className='image-container'>
          <img src={require('../src/assets/nature1.jpg')} className="image"/>
          <img src={require('../src/assets/nature1.jpg')} className="image"/>
          <img src={require('../src/assets/nature1.jpg')} className="image"/>
          <img src={require('../src/assets/nature1.jpg')} className="image"/>
        </div>
      </div>
    </div>
  );
}

export default App;
