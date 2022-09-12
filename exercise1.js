function addressMaker(address){
	let {city, country} = address;

	let newAddress = {
		city,
		country,
		town:'Langata'
	}
	console.log(`country: ${newAddress.country}, city: ${newAddress.city}, town: ${newAddress.town}`)
}

addressMaker({city:"Nairobi",country:"Kenya"})