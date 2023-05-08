import React from 'react'
import FilmFeature from './FilmFeature'
import './FeatureList.css'

function FeatureList(props) {
	const icons = props.features.map((feature) => {
    return <FilmFeature key={feature} name={feature} />
  })
	return <div className="FeatureList" aria-label='feature list'>{icons}</div>
}

export default FeatureList