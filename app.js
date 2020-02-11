const request = require("request")
const geocode = require("./utils-2/geocode")
const forecast = require("./utils-2/forecast")

address = process.argv[2]


geocode(address = "united state", (error, {latitude, longitude, location} = {}) => {
    if(error){
        console.log(error)
    }else{
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                console.log(error)
            }
            console.log(location)
            console.log("Data: ", forecastData)
        })
    }
})




    
