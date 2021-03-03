const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7eaba7afc17ea8c54ec746fa42b15ec5&units=m&query=' + encodeURIComponent(latitude + ', ' + longitude) 

    request({url: url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
           callback(undefined, 
                            
               body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.'

           )     
        }
    })
}

module.exports = forecast