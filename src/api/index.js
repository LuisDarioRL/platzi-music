import config from './config.js'

const {apiKey, country} = config


export default function getArtist(newCountry) {
	const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${newCountry}&api_key=${apiKey}&format=json`
	console.log(">>>Datos: " + URL)
	return fetch(URL)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}