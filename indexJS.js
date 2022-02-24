//establishing date & time--------------------------------------------------------------------
let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let time = hours + ":" + minutes;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let dayInfo = `${day} ${month}, ${date}`;
let datesAbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dateAbr = datesAbr[now.getDay()];
let dateSpot = document.querySelector("#dateTimeID");
dateSpot.innerHTML = dayInfo;
if (hours === 0) {
  let earlyHours = now.getHours() + 12;
  let dateInfo = document.querySelector("h2");
  if (minutes < 10) {
    dateInfo.innerHTML =
      earlyHours + ":0" + minutes + " am " + day + ", " + month + " " + date;
  } else {
    dateInfo.innerHTML =
      earlyHours + ":" + minutes + " am " + day + ", " + month + " " + date;
  }
} else {
  if (hours > 0) {
    let dateInfo = document.querySelector("#currentTime");
    if (hours < 13) {
      if (minutes < 10) {
        let correctedCurrent = hours + ":0" + minutes;
        dateInfo.innerHTML = correctedCurrent;
      } else {
        let timeInfo = hours + ":" + minutes;
        dateInfo.innerHTML = timeInfo;
      }
    } else {
      if (hours > 12) {
        if (minutes < 10) {
          let imperialHour = hours - 12;
          let dateInfo = document.querySelector("#currentTime");
          let imperialT = imperialHour + ":0" + minutes;
          dateInfo.innerHTML = imperialT;
        } else {
          let imperialHours = hours - 12;
          let dateInfo = document.querySelector("#currentTime");
          let imperialTime = imperialHours + ":" + minutes;
          dateInfo.innerHTML = imperialTime;
        }
      }
    }
  }
}

// Weather Search Button ----------------------------------------------
function geolocator(event) {
  event.preventDefault();
  let geoHeader = document.querySelector("h1");
  geoHeader.innerHTML = "My location";
  navigator.geolocation.getCurrentPosition(geolocate);
}
function geolocate(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoApiKey = "79af00917a82cd10de020b449a34fa55";
  let geoApiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    geoApiKey +
    "&units=imperial";
  axios.get(`${geoApiUrl}`).then(showTemperature);
}

function replacement(event) {
  event.preventDefault();
  let updatedHeader = document.querySelector("h1");
  let inputs = document.querySelector("#location-input");
  let inputSeg1 = inputs.value.charAt(0).toUpperCase() + inputs.value.slice(1);
  updatedHeader.innerHTML = inputSeg1;
  let apiKey = "79af00917a82cd10de020b449a34fa55";
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputSeg1 +
    "&appid=" +
    apiKey +
    "&units=imperial";
  axios.get(`${apiURL}`).then(showTemperature);
}

let rainyIcon = document.getElementById("rainyID");
let sunnyIcon = document.getElementById("sunnyID");
let snowyIcon = document.getElementById("snowyID");
let stormyIcon = document.getElementById("stormyID");
let cloudyIcon = document.getElementById("cloudyID");

function showTemperature(response) {
  let presentTemp = Math.round(response.data.main.temp);
  let tempSpot = document.querySelector("#tempID");
  tempSpot.innerHTML = `${presentTemp}`;
  let high = Math.round(response.data.main.temp_max);
  let lo = Math.round(response.data.main.temp_min);
  let hiToday = document.querySelector("#hiToday");
  hiToday.innerHTML = high;
  let loToday = document.querySelector("#loToday");
  loToday.innerHTML = lo;
  let percent = Math.round(response.data.main.humidity) + "%";
  let percentageToday = document.querySelector("#humidityID");
  percentageToday.innerHTML = percent;
  let windSpeed = Math.round(response.data.wind.speed) + " mph";
  let windSpot = document.querySelector("#windyID");
  windSpot.innerHTML = windSpeed;

  fahrenheitTemperature = Math.round(response.data.main.temp);
  fahrenheitTempMax = Math.round(response.data.main.temp_max);
  fahrenheitTempMin = Math.round(response.data.main.temp_min);
  celsiusTemperature = Math.round((response.data.main.temp - 32) / 1.8);
  celsiusTempMax = Math.round((response.data.main.temp_max - 32) / 1.8);
  celsiusTempMin = Math.round((response.data.main.temp_min - 32) / 1.8);
  windspeedMile = Math.round(response.data.wind.speed);
  windspeedKilo = Math.round(response.data.wind.speed * 1.60934);

  totalLatitude = (response.data.coord.lat);
  totalLongitude = (response.data.coord.lon);
  
  let weatherDescripSpot = document.querySelector("#weatherTypeID");
  let weatherDescription = (response.data.weather[0].description);  
  weatherDescripSpot.innerHTML = weatherDescription;

  let weatherMain = (response.data.weather[0].main);

  if (weatherMain === "Thunderstorm") {
    rainyIcon.style.display='none';
    sunnyIcon.style.display='none';
    snowyIcon.style.display='none';
    stormyIcon.style.display='inline-block';
    cloudyIcon.style.display='none';
  }
  if (weatherMain === "Drizzle") {
    rainyIcon.style.display='inline-block';
    sunnyIcon.style.display='none';
    snowyIcon.style.display='none';
    stormyIcon.style.display='none';
    cloudyIcon.style.display='none';
  }
  if (weatherMain === "Rain") {
    rainyIcon.style.display='inline-block';
    sunnyIcon.style.display='none';
    snowyIcon.style.display='none';
    stormyIcon.style.display='none';
    cloudyIcon.style.display='none';
  }
  if (weatherMain === "Snow") {
    rainyIcon.style.display='none';
    sunnyIcon.style.display='none';
    snowyIcon.style.display='inline-block';
    stormyIcon.style.display='none';
    cloudyIcon.style.display='none';
  }
  if (weatherMain === "Clouds") {
    rainyIcon.style.display='none';
    sunnyIcon.style.display='none';
    snowyIcon.style.display='none';
    stormyIcon.style.display='none';
    cloudyIcon.style.display='inline-block';
  }
  if (weatherMain === "Clear") {
    rainyIcon.style.display='none';
    sunnyIcon.style.display='inline-block';
    snowyIcon.style.display='none';
    stormyIcon.style.display='none';
    cloudyIcon.style.display='none';
  }
  getForecast();
}

function formatWeekday(timestamp){
    let date = new Date(timestamp *1000);
    let weekday = date.getDay();
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays[weekday];
}

function reportForecast(response){
    let reportedForecast = response.data.daily;
    let forecastElement = document.querySelector("#forecastID");
    let forecastHTML = `<div class = "row">`;
    reportedForecast.forEach(function (forecastDay, index){
        if (index < 6){
                forecastHTML = 
                    forecastHTML + `
                        <div class ="col-2">
                            <div id = "tomorrowID" class = "weekDay">${formatWeekday(forecastDay.dt)}</div> 
                            <span id = "tomorrowWeatherIcon"></span>
                            <div id = "weatherForecastTemp" class = "weekDayTemps">
                                <span class = "weatherForecastMax" id = "forecastMaxID">${Math.round(forecastDay.temp.max)}°</span>|
                                <span class = "weatherForecastMin" id = "forecastMinID">${Math.round(forecastDay.temp.min)}°</span>
                            </div> 
                        </div>`;
            }
})
forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
}
let units = "imperial";

// ------- One Call Api ------------------------------------------------
function getForecast(){
    let oneApiKey = "79af00917a82cd10de020b449a34fa55";
    let oneApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=`+totalLatitude+`&lon=`+totalLongitude+`&exclude=current,minutely,hourly&appid=`+oneApiKey+`&units=`+units;
    axios.get(`${oneApiUrl}`).then(reportForecast);
}

// ---------------------------------------------------------------------

let totalLatitude = null;
let totalLongitude = null;

let celsiusTemperature = null;
let fahrenheitTemperature = null;
let celsiusTempMax = null;
let celsiusTempMin = null;
let fahrenheitTempMax = null;
let fahrenheitTempMin = null;
let windspeedKilo = null;
let windspeedMile = null;

function convertToCel(event) {
  event.preventDefault();
  let todayCelSpot = document.querySelector("#tempID");
  let todayCelValue = celsiusTemperature;
  todayCelSpot.innerHTML = todayCelValue;
  let todayCelMaxSpot = document.querySelector("#hiToday");
  let todayCelMax = celsiusTempMax;
  todayCelMaxSpot.innerHTML = todayCelMax;
  let todayCelMinSpot = document.querySelector("#loToday");
  let todayCelMin = celsiusTempMin;
  todayCelMinSpot.innerHTML = todayCelMin;
  let fahElement = document.getElementById("fahrenheitConversionID");
  fahElement.classList.remove("fahrenheitConversion2");
  fahElement.classList.add("fahrenheitConversion");
  let celElement = document.getElementById("celsiusConversionID");
  celElement.classList.remove("celsiusConversion");
  celElement.classList.add("celsiusConversion2");
  let kiloWindySpot = document.querySelector("#windyID");
  let kiloSpeed = windspeedKilo + " kph";
  kiloWindySpot.innerHTML = kiloSpeed;
  units = "metric";
  getForecast();
}

function convertToFah(event) {
  event.preventDefault();
  let todayFahSpot = document.querySelector("#tempID");
  let todayFahValue = fahrenheitTemperature;
  todayFahSpot.innerHTML = todayFahValue;
  let todayFahMaxSpot = document.querySelector("#hiToday");
  let todayFahMax = fahrenheitTempMax;
  todayFahMaxSpot.innerHTML = todayFahMax;
  let todayFahMinSpot = document.querySelector("#loToday");
  let todayFahMin = fahrenheitTempMin;
  todayFahMinSpot.innerHTML = todayFahMin;
  let fahElement = document.getElementById("fahrenheitConversionID");
  fahElement.classList.remove("fahrenheitConversion");
  fahElement.classList.add("fahrenheitConversion2");
  let celElement = document.getElementById("celsiusConversionID");
  celElement.classList.remove("celsiusConversion2");
  celElement.classList.add("celsiusConversion");
  let mileWindySpot = document.querySelector("#windyID");
  let mileSpeed = windspeedMile + " mph";
  mileWindySpot.innerHTML = mileSpeed;
  units = "imperial";
  getForecast();
}
// Buttons -----------------------------------------------------
let searchButton = document.querySelector("#searchEntry");
searchButton.addEventListener("click", replacement);

let geoButton = document.querySelector("#geoID");
geoButton.addEventListener("click", geolocator);

let celButton = document.querySelector("#celsiusConversionID");
celButton.addEventListener("click", convertToCel);

let fahButton = document.querySelector("#fahrenheitConversionID");
fahButton.addEventListener("click", convertToFah);