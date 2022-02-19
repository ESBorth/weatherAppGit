//functions
function geolocator(event){
  event.preventDefault();
  let geoHeader = document.querySelector("h1");
  geoHeader.innerHTML = "My location";
  navigator.geolocation.getCurrentPosition(geolocate);
}
function geolocate(position){
  let latitude = (position.coords.latitude);
  let longitude = (position.coords.longitude);
  let geoApiKey = "79af00917a82cd10de020b449a34fa55";
  let geoApiUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid="+geoApiKey+"&units=imperial";
  axios.get(`${geoApiUrl}`).then(showTemperature);
} 

function replacement(event){
  event.preventDefault();
  let updatedHeader = document.querySelector("h1");
  let inputs = document.querySelector("#location-input");
  let inputSeg1 = inputs.value.charAt(0).toUpperCase() + inputs.value.slice(1);
  updatedHeader.innerHTML = inputSeg1;
  let apiKey = "79af00917a82cd10de020b449a34fa55";
  let apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+inputSeg1+"&appid="+apiKey+"&units=imperial";
  axios.get(`${apiURL}`).then(showTemperature);
}
function showTemperature(response){
    let presentTemp = Math.round(response.data.main.temp);
    let tempSpot = document.querySelector("#tempID");
    tempSpot.innerHTML = `${presentTemp}`;
    let high = Math.round(response.data.main.temp_max)+ "°";
    let lo = Math.round(response.data.main.temp_min) + "°";
    let hiToday = document.querySelector("#hiToday");
    hiToday.innerHTML = high;
    let loToday = document.querySelector("#loToday");
    loToday.innerHTML = lo;
    let percent = Math.round(response.data.main.humidity) + "%";
    let percentageToday = document.querySelector("#percentageToday");
    percentageToday.innerHTML = percent;
    if (response.data.weather.main === "Clear"){
      document.querySelector("#sunny").src="sunny.png";
    }
    if (response.data.weather.main === "Thunderstorm"){
      document.querySelector("#sunny").src="thunderstorm.png";
    }
    if (response.data.weather.main === "Rain"){
      document.querySelector("#sunny").src="cloudy.png";
    }
    if (response.data.weather.main === "Snow"){
      document.querySelector("#sunny").src="snow.png";
    }
}
//Date Data and info
let now = new Date(); 
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let time = hours + ":" + minutes;
let days = ["Sunday", "Monday", 
"Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday"];
let day = days[now.getDay()];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()];
let year = now.getFullYear();
let current = `${time} ${day}, ${month} ${date}`; 
let datesAbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dateAbr = datesAbr[now.getDay()];

//Week Day Bar Name Correction
if (day === "Sunday"){
  let tomorrow = document.querySelector("#tomorrowID");
  tomorrow.innerHTML = datesAbr[now.getDay() + 1];
  let dayAfter = document.querySelector("#dayTwoID");
  dayAfter.innerHTML = datesAbr[now.getDay() + 2];
  let twoDaysAfter = document.querySelector("#dayThreeID");
  twoDaysAfter.innerHTML = datesAbr[now.getDay() + 3];
  let threeDaysAfter = document.querySelector("#dayFourID");
  threeDaysAfter.innerHTML = datesAbr[now.getDay() + 4];
  let fourDaysAfter = document.querySelector("#dayFiveID");
  fourDaysAfter.innerHTML = datesAbr[now.getDay() + 5];
  let fiveDaysAfter = document.querySelector("#daySixID");
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() + 6];
  let nextWeek = document.querySelector("#daySevenID");
  nextWeek.innerHTML = datesAbr[now.getDay()];
}
if (day === "Monday"){
  let tomorrow = document.querySelector("#tomorrowID");
  tomorrow.innerHTML = datesAbr[now.getDay() + 1];
  let dayAfter = document.querySelector("#dayTwoID"); 
  dayAfter.innerHTML = datesAbr[now.getDay() + 2];
  let twoDaysAfter = document.querySelector("#dayThreeID");
  twoDaysAfter.innerHTML = datesAbr[now.getDay() + 3];
  let threeDaysAfter = document.querySelector("#dayFourID");
  threeDaysAfter.innerHTML = datesAbr[now.getDay() + 4];
  let fourDaysAfter = document.querySelector("#dayFiveID");
  fourDaysAfter.innerHTML = datesAbr[now.getDay() + 5];
  let fiveDaysAfter = document.querySelector("#daySixID");
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() - 1];
  let nextWeek = document.querySelector("#daySevenID");
  nextWeek.innerHTML = datesAbr[now.getDay()];
}
if (day === "Tuesday"){
  let tomorrow = document.querySelector("#tomorrowID"); //Wednesday
  tomorrow.innerHTML = datesAbr[now.getDay() + 1];
  let dayAfter = document.querySelector("#dayTwoID"); //Thursday
  dayAfter.innerHTML = datesAbr[now.getDay() + 2];
  let twoDaysAfter = document.querySelector("#dayThreeID"); //Friday
  twoDaysAfter.innerHTML = datesAbr[now.getDay() + 3];
  let threeDaysAfter = document.querySelector("#dayFourID"); //Saturday
  threeDaysAfter.innerHTML = datesAbr[now.getDay() + 4];
  let fourDaysAfter = document.querySelector("#dayFiveID"); //Sunday
  fourDaysAfter.innerHTML = datesAbr[now.getDay() - 2];
  let fiveDaysAfter = document.querySelector("#daySixID"); //Monday
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() - 1];
  let nextWeek = document.querySelector("#daySevenID"); //Tuesday
  nextWeek.innerHTML = datesAbr[now.getDay()];
}
if (day === "Wednesday"){
  let tomorrow = document.querySelector("#tomorrowID"); 
  tomorrow.innerHTML = datesAbr[now.getDay() + 1];
  let dayAfter = document.querySelector("#dayTwoID"); 
  dayAfter.innerHTML = datesAbr[now.getDay() + 2];
  let twoDaysAfter = document.querySelector("#dayThreeID"); 
  twoDaysAfter.innerHTML = datesAbr[now.getDay() + 3];
  let threeDaysAfter = document.querySelector("#dayFourID"); 
  threeDaysAfter.innerHTML = datesAbr[now.getDay() - 3];
  let fourDaysAfter = document.querySelector("#dayFiveID"); 
  fourDaysAfter.innerHTML = datesAbr[now.getDay() - 2];
  let fiveDaysAfter = document.querySelector("#daySixID"); 
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() - 1];
  let nextWeek = document.querySelector("#daySevenID"); 
  nextWeek.innerHTML = datesAbr[now.getDay()];
}
if (day === "Thursday"){
  let tomorrow = document.querySelector("#tomorrowID"); 
  tomorrow.innerHTML = datesAbr[now.getDay() + 1];
  let dayAfter = document.querySelector("#dayTwoID"); 
  dayAfter.innerHTML = datesAbr[now.getDay() + 2];
  let twoDaysAfter = document.querySelector("#dayThreeID"); 
  twoDaysAfter.innerHTML = datesAbr[now.getDay() - 4];
  let threeDaysAfter = document.querySelector("#dayFourID");
  threeDaysAfter.innerHTML = datesAbr[now.getDay() - 3];
  let fourDaysAfter = document.querySelector("#dayFiveID"); 
  fourDaysAfter.innerHTML = datesAbr[now.getDay() - 2];
  let fiveDaysAfter = document.querySelector("#daySixID");
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() - 1];
  let nextWeek = document.querySelector("#daySevenID"); 
  nextWeek.innerHTML = datesAbr[now.getDay()];
}
if (day === "Friday"){
  let tomorrow = document.querySelector("#tomorrowID"); 
  tomorrow.innerHTML = datesAbr[now.getDay() + 1];
  let dayAfter = document.querySelector("#dayTwoID"); 
  dayAfter.innerHTML = datesAbr[now.getDay() - 5 ];
  let twoDaysAfter = document.querySelector("#dayThreeID"); 
  twoDaysAfter.innerHTML = datesAbr[now.getDay() - 4];
  let threeDaysAfter = document.querySelector("#dayFourID");
  threeDaysAfter.innerHTML = datesAbr[now.getDay() - 3];
  let fourDaysAfter = document.querySelector("#dayFiveID"); 
  fourDaysAfter.innerHTML = datesAbr[now.getDay() - 2];
  let fiveDaysAfter = document.querySelector("#daySixID");
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() - 1];
  let nextWeek = document.querySelector("#daySevenID"); 
  nextWeek.innerHTML = datesAbr[now.getDay()];
}
if (day === "Saturday"){
  let tomorrow = document.querySelector("#tomorrowID"); 
  tomorrow.innerHTML = datesAbr[now.getDay() - 6];
  let dayAfter = document.querySelector("#dayTwoID"); 
  dayAfter.innerHTML = datesAbr[now.getDay() - 5];
  let twoDaysAfter = document.querySelector("#dayThreeID"); 
  twoDaysAfter.innerHTML = datesAbr[now.getDay() - 4];
  let threeDaysAfter = document.querySelector("#dayFourID");
  threeDaysAfter.innerHTML = datesAbr[now.getDay() - 3];
  let fourDaysAfter = document.querySelector("#dayFiveID"); 
  fourDaysAfter.innerHTML = datesAbr[now.getDay() - 2];
  let fiveDaysAfter = document.querySelector("#daySixID");
  fiveDaysAfter.innerHTML = datesAbr[now.getDay() - 1];
  let nextWeek = document.querySelector("#daySevenID"); 
  nextWeek.innerHTML = datesAbr[now.getDay()];
}

//Before 1am Correction and/or under ten minutes correction
if (hours === 0){
  let earlyHours = now.getHours() + 12;
  let dateInfo = document.querySelector("h2");
  if (minutes < 10){
    dateInfo.innerHTML = earlyHours + ":0" + minutes + " am " + day + ", " + month + " " + date; 
  } else {
    dateInfo.innerHTML = earlyHours + ":" + minutes + " am " + day + ", " + month + " " + date;
  }
} else {
  if (hours > 0){
    let dateInfo = document.querySelector("h2");
    if (hours < 13){
     if (minutes < 10){
      let correctedCurrent = hours + ":0" + minutes +  " am " + day + ", " + month + " " + date;
      dateInfo.innerHTML = correctedCurrent;  
      } else {
      let timeInfo = hours + ":" + minutes + " am " + day + ", " + month + " " + date;
      dateInfo.innerHTML = timeInfo;
    }
  } else {
  if (hours > 12){
    if (minutes < 10){
        let imperialHour = hours - 12;
        let dateInfo = document.querySelector("h2");
        let imperialT = imperialHour + ":0" + minutes + " pm " + day + ", " + month + " " + date;
        dateInfo.innerHTML = imperialT;
    } else {
      let imperialHours = hours - 12;
      let dateInfo = document.querySelector("h2");
      let imperialTime = imperialHours + ":" + minutes + " pm " + day + ", " + month + " " + date;
      dateInfo.innerHTML = imperialTime;
    }
  }
}}}

//interactive functions
let searchButton = document.querySelector("#searchEntry");
searchButton.addEventListener("click", replacement);

let geoButton = document.querySelector("#geoID");
geoButton.addEventListener("click", geolocator);