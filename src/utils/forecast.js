const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=6b4d22c08e271c309b07ab3ec3329823&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,{
                weatherDescription : body.current.weather_descriptions[0],
                temperature : body.current.temperature,
                precip : body.current.precip
            })
        }
    })
}

module.exports = forecast