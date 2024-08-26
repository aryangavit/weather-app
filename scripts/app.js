const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data)=>{
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    //destructuring method
    // const{cityDetails,weather} = data;

    //updating details such as name, weather , temperature
    details.innerHTML = `
    <h5 class="my-3">${cityDetails.LocalizedName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `

    //updating night and day images
    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc='./images/day.svg';
    }else{
        timeSrc='./images/night.svg';
    }
    time.setAttribute('src',timeSrc);

    //updating icon
    const iconSrc = `./images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    //showing card
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
};

const updateCity = async(city)=>{
    //console.log(city);
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails,
        weather
    };
}

cityForm.addEventListener('submit',(e)=>{
    //prevint default refresh
    e.preventDefault();
    //gettin user city input
    const city = cityForm.city.value.trim();

    //updating the ui below it
    updateCity(city)
        .then((data)=>{
            console.log(data);
            updateUI(data);
        })
        .catch(err=>{
            console.log(err);
        })

});