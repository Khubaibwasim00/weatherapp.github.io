const apiKey="cffac7de4440ddabc53491af7cdd0058";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?unit=metric&q=karachi"

async function checkweather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);
}
checkweather();