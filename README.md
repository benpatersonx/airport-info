# Airport Information
Retrieve detailed information on any airport of your choice, from the country, city, timezone, ICAO and coordinates.  The query can be specified with an ICAO or generic airport name.

## Example
```js
const airportInfo = require("airport-info")
airportInfo.getAirportInfo("LAX")
    .then(r => console.log(r))
    .catch(e => console.error(e))
```

## Response
```js
{
  name: 'Los Angeles International Airport',
  country: 'United States',
  city: 'Los Angeles',
  timezone: 'America/Los_Angeles',
  icao: 'KLAX',
  latitude: 33.9425028,
  longitude: -118.4071111
}
```
