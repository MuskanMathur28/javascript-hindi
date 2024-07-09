const inputbox=document.querySelector('.input-box')
const searchbtn=document.getElementById('searchbtn')
const weather_img=document.querySelector('.weather-img')
const temp=document.querySelector('.temperature')
const description=document.querySelector('.description')
const humidity=document.getElementById('humidity')
const wind_speed=document.getElementById('wind-speed')
const location_not_found=document.querySelector('.location-not-found')
const weather_body=document.querySelector('.weather-body')


async function checkweather(city){
    const api_key="045b1570c1909670dbd17c9a8bd5c4bb"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response=>response.json())
    
     if(weather_data.cod==='404'){
        location_not_found.style.display="flex"
        weather_body.style.display="none"
        return;
     }
      location_not_found.style.display="none"
      weather_body.style.display="flex"

    temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`
    description.innerHTML=`${weather_data.weather[0].description}`
    humidity.innerHTML=`${weather_data.main.humidity}%`
    wind_speed.innerHTML=`${weather_data.wind.speed}km/H`
    
    switch(weather_data[0].main){
        case 'Clouds':
            weather_img.src="assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src="assets/clear.png";
            break;
        case 'Rain':
            weather_img.src="assets/rain.png";
            break;
        case 'Mist':
            weather_img.src="assets/mist.png";
            break;
        case 'snow':
            weather_img.src="assets/snow.png";
            break;


            
    }
}

searchbtn.addEventListener('click',()=>{
    checkweather(inputbox.value)
})