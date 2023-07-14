const ApiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const Search = document.querySelector(".Search input");
const BTN = document.querySelector(".Search button");
const WeatherIcon = document.querySelector(".WeatherIcon");
async function CheckWeather(City)
{
    const Response = await fetch(ApiUrl + City + `&appid=${ApiKey}`);
    const Data = await Response.json();
    console.log(Data);
    document.querySelector(".City").innerHTML = Data.name;
    document.querySelector(".Temp").innerHTML = Math.round(Data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = Data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = Data.wind.speed + " KM/H";

    if(Data.Weather[0].main === "Clouds")
    {
        WeatherIcon.src = "./clouds.png";
    }
    else if(Data.Weather[0].main === "Clear")
    {
        WeatherIcon.src = "./clear.png";
    }
    else if(Data.Weather[0].main === "Rain")
    {
        WeatherIcon.src = "./rain.png";
    }
    else if(Data.Weather[0].main === "Drizzle")
    {
        WeatherIcon.src = "./drizzle.png";
    }
    else if(Data.Weather[0].main === "Mist")
    {
        WeatherIcon.src = "./mist.png";
    }
}

BTN.addEventListener("click", () =>
{
    CheckWeather(Search.value);
})


