import config from './config.js'

const {apiKey, country} = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${apiKey}&format=json`

export default function getArtist() {
	console.log(">>>Datos: " + URL)
	return fetch(URL)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}