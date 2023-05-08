import React from 'react';
import FilmSpace from '../FilmSpace/FilmSpace'
import data from '../../filmdata';
import { useState } from 'react'
import './List.css'
import Reel from '../../assets/reel.jpg'
import RandomSpace from '../Random/Random';

function List() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    return inTitle})
  .map(({ title, images, id, features } ) => {
    return (
      <FilmSpace
        id={id}
        key={`${title}-${id}`} 
        image={images[0]}
      />
    )
  })

  return (
    <div className="Search" aria-label='search section'>
      <img className='w-[400px] mx-auto my-5 px-3' src={Reel} alt='/' aria-label='image of film reel'/>
			<form aria-label='search form'>
				<input
					value={query}
					placeholder="Search Film By Brand"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
      <button className='bg-[#F2E63D] text-[#003000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center' aria-label='pick for me button'>
      <RandomSpace />
      </button>
			<div className="List">
        { spaces.length > 0 ? spaces : "No results. Please Search Again." } 
      </div>
    </div>
  )
  
}
  

export default List