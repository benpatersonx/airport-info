const fetch = require("node-fetch")

const getAirportInfo = async(query) => {
    const response = {
        name: "",
        country: "",
        city: "",
        timezone: "",
        icao: "",
        latitude: 0,
        longitude: 0
    }

    const airportApi = await fetch(`https://api.aviowiki.com/free/airports/search?query=${query}`)
        .then(res => res.json())
        .catch(e => console.error(e))

    response.name = airportApi.content[0].name
    response.country = airportApi.content[0].country.name
    response.city = airportApi.content[0].servedCity
    response.timezone = airportApi.content[0].timeZone
    response.icao = airportApi.content[0].icao
    response.latitude = airportApi.content[0].coordinates.latitude
    response.longitude = airportApi.content[0].coordinates.longitude

    return response
}

module.exports = getAirportInfo;