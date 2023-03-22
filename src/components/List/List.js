import React from 'react';
import FilmSpace from '../FilmSpace/FilmSpace'
import data from '../../filmdata';
import { useState } from 'react'
import './List.css'
import Reel from '../../assets/reel.jpg'

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
    <div className="Search">
      <img className='w-[400px] mx-auto my-5 px-3' src={Reel} alt='/' />
			<form>
				<input
					value={query}
					placeholder="Search Film By Brand"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
			<div className="List">
        { spaces.length > 0 ? spaces : "No results. Please Search Again." } 
      </div>
    </div>
  )
  
}
  

export default List