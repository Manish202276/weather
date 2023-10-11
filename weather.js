const API_KEY='5d1d3239207e2bb8c267432f0c300ca6';
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric
const form=document.querySelector("form")
const weather=document.querySelector("#weather") 
const search=document.querySelector(".search")
const getWeather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
    const response=await fetch(url);
    const data=await response.json()
    return showweather(data);
}
function showweather(data1){
    weather.innerHTML=
    `
    <div>
        <img src="https://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data1.main.temp}°C</h2>
        <h4>${data1.weather[0].main}</h4>
    </div>
    `
}
form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)