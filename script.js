if (typeof window !== "undefined") {

    let inputBox = document.querySelector('.input-box');
    let searchBtn = document.querySelector('.searchBtn');
    let temperature = document.querySelector('.temperature');
    let description = document.querySelector('.description');
    let humidity = document.querySelector('.humidity');
    let windSpeed = document.querySelector('.wind');
    const weather_img=document.querySelector('.weather-img');
    const location_error =document.querySelector('.location-error');
    const w_body = document.querySelector('.w-body');
    async function checkWeather(city) {
        const api_key = "0d10824423fc16777d35aa6185819159";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        var weather_data = await fetch(`${url}`).then(response => response.json());

        if(weather_data.cod === `404`){
            location_error.style.display = "flex";
            w_body.style.display= "none";
            console.log("error");
            return;

        }
        else {
            location_error.style.display = "none";
            w_body.style.display= "block";
            console.log("success");
        }

        temperature.innerHTML = Math.round(weather_data.main.temp-273.15)+'°C';
        description.innerHTML = weather_data.weather[0].description;
        humidity.innerHTML = weather_data.main.humidity + '%';
        windSpeed.innerHTML =Math.round(weather_data.wind.speed*3-3) + 'Km/h';

        switch(weather_data.weather[0].main){
            case 'thunderstorm':
                 weather_img.src="rain.png";
                 break;
            case 'Clouds':
                weather_img.src = "clouds.webp";
                break;
            case 'Clear':
                weather_img.src= "sun.webp";
                break;
            case 'Rain':
                weather_img.src="rain.webp";
                break;
            case 'Mist':
                weather_img.src = "mist.webp";
                break;

            case 'Snow':
                weather_img.src="snow.webp";
                break;
            case 'Haze':
                weather_img.src="sun.webp";
                break;
            
        }
    
        console.log(weather_data);
    }
    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    });
}
