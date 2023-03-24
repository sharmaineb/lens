import { useNavigate } from 'react-router-dom'
import data from '../../filmdata.json'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>PICK FOR ME</button>
  )
}

export default RandomSpace