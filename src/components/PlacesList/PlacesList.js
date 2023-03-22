import React from 'react';
import PlacesSpace from '../PlacesSpace/PlacesSpace';
import './PlacesList.css';
import data from '../../places-data';
import { useState } from 'react'
import GGB from '../../assets/ggb.jpg'

function PlacesList() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    return inTitle || inAddress })
  .map(({ title, address, images, id } ) => {
    return (
      <PlacesSpace
        id={id}
        key={`${title}-${id}`} 
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

  return (
    <div className="Search">
      <img className='w-[400px] mx-auto my-5 px-3' src={GGB} alt='/' />
			<form>
				<input
					value={query}
					placeholder="Search By City"
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
			<div className="List">
        { spaces.length > 0 ? spaces : "No results. Please Search Again." } 
      </div>
    </div>
  )
  
}
  

export default PlacesList