
const apiURL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"

async function getTopCampers(){
	const response = await fetch(apiURL)
	const json = await response.json()

	console.log(json[1])
}

getTopCampers()