const { getDistance } = require('geolib');


    const MY_COORDS = {latitude: 36.907281, longitude: 10.301018}
    const address = {latitude: 36.86427267597369, longitude: 10.340585946055297}

    let distance = getDistance(MY_COORDS,address, 1000)
    console.log(distance);