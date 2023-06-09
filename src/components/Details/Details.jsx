import React from 'react'
import { useParams } from 'react-router'
import data from '../../filmdata'
// import FilmFeatureList from '../FilmFeature/FilmFeature'

function Details(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc, features, song, album, movieimg, musician, movie, book, bookimg, author, place, address, placeimg } = data[id]

  return (
    <>
    <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto p-1'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' aria-label="film details">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt={title} aria-label='image of film'/>
      <div className='flex flex-col justify-center'>
        <h1 className='pl-3 text-[#003000] font-bold'>{title}</h1>
        <p className='pl-3 text-[#003000] pb-2' aria-label='description of film'><strong>Film Description: </strong>{desc}</p>
        </div>
      </div>
    </div>
      <div className='w-full py-[10rem] px-4 bg-white justify-center flex'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center' aria-label='music details'>
              <p className='text-center text-3xl font-bold text-[#003000]'>Album & Musician:</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8' aria-label='name of album'>Album: {album}</p>
                  <p className='py-2 border-b mx-8' aria-label='name of musician'>Musician: {musician}</p>
                  <p className='py-2 border-b mx-8' aria-label='name of song'>Song: {song}</p>
              <img className='w-[450px] mx-auto my-5 px-7' src={`${process.env.PUBLIC_URL}/images/${features[0]}`} alt={title} aria-label='image of album'/>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center' aria-label='movie details'>
              <p className='text-center text-3xl font-bold text-[#003000]' aria-label='name of movie'>Movie: </p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>{movie}</p>
              <img className='w-[450px] mx-auto my-5 px-7' src={`${process.env.PUBLIC_URL}/images/${movieimg[0]}`} alt={title} aria-label='movie poster image'/>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center' aria-label='book details'>
              <p className='text-center text-3xl font-bold text-[#003000]' aria-label='name of book'>Book: </p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>{book}</p>
              <p className='py-2 border-b mx-8' aria-label='name of author'>Author: {author}</p>
              <img className='w-[450px] mx-auto my-5 px-7' src={`${process.env.PUBLIC_URL}/images/${bookimg[0]}`} alt={title} aria-label='image of book'/>
              </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center' aria-label='location details'>
              <p className='text-center text-3xl font-bold text-[#003000]'>Location: </p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8' aria-label='name of location'>{place}</p>
              <p className='py-2 border-b mx-8' aria-label='address of location'>Address: {address}</p>
              <img className='w-[450px] mx-auto my-5 px-7' src={`${process.env.PUBLIC_URL}/images/${placeimg[0]}`} alt={title} aria-label='image of location'/>
              </div>
          </div>
      </div>
    </div> 
    </>
  )
}

export default Details