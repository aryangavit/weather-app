
//getting city info
const getCity = async (city) =>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${config.key}&q=${city}`;
    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
};

//getting weather info
const getWeather = async(id)=>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${config.key}`;

    const response = await fetch(base+query);
    const data = await response.json();
    return data[0];
}

// getCity('mumbai')
//     .then(data=>{
//         // console.log(data);
//         return getWeather(data.Key);
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log(error);
//     })

