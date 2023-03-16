import data from './filmdata.json'

data.forEach((obj, i) => {
	obj.id = i
})

export default data;