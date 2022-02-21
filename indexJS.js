//establishing date & time--------------------------------------------------------------------
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
let dayInfo = `${day} ${month}, ${date}`; 
let datesAbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dateAbr = datesAbr[now.getDay()];
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
    nextWeek.innerHTML = dateAbr;
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
    nextWeek.innerHTML = dateAbr;
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
    nextWeek.innerHTML = dateAbr;
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
    nextWeek.innerHTML = dateAbr;
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
    nextWeek.innerHTML = dateAbr;
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
    nextWeek.innerHTML = dateAbr;
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
    nextWeek.innerHTML = dateAbr;
  }
let dateSpot = document.querySelector("#dateTimeID");
dateSpot.innerHTML = dayInfo;
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
      let dateInfo = document.querySelector("#currentTime");
      if (hours < 13){
       if (minutes < 10){
        let correctedCurrent = hours + ":0" + minutes;
        dateInfo.innerHTML = correctedCurrent;  
        } else {
        let timeInfo = hours + ":" + minutes;
        dateInfo.innerHTML = timeInfo;
      }
    } else {
    if (hours > 12){
      if (minutes < 10){
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
  }}} 

// Weather Search Button ----------------------------------------------
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
    let weatherType = (response.data.weather.description);
    let weatherTypeSpot = document.querySelector("#weatherTypeID");
    weatherTypeSpot.innerHTML = weatherType;
    let high = Math.round(response.data.main.temp_max);
    let lo = Math.round(response.data.main.temp_min);
    let hiToday = document.querySelector("#hiToday");
    hiToday.innerHTML = high;
    let loToday = document.querySelector("#loToday");
    loToday.innerHTML = lo;
    let percent = Math.round(response.data.main.humidity) + "%";
    let percentageToday = document.querySelector("#humidityID");
    percentageToday.innerHTML = percent;
    let windSpeed = (Math.round(response.data.wind.speed))+" mph" ;
    let windSpot = document.querySelector("#windyID");
    windSpot.innerHTML = windSpeed;

    fahrenheitTemperature = Math.round(response.data.main.temp);
    fahrenheitTempMax = Math.round(response.data.main.temp_max);
    fahrenheitTempMin = Math.round(response.data.main.temp_min);
    celsiusTemperature = Math.round(((response.data.main.temp)-32)/1.8);
    celsiusTempMax = Math.round(((response.data.main.temp_max)-32)/1.8);
    celsiusTempMin = Math.round(((response.data.main.temp_min)-32)/1.8);
    windspeedMile = Math.round(response.data.wind.speed);
    windspeedKilo = Math.round((response.data.wind.speed)*1.60934); 


    if (response.data.weather.main = "Thunderstorm"){
        document.getElementById("rainyID").style.display='none';
        document.getElementById("sunnyID").style.display='none';
        document.getElementById("snowyID").style.display='none';
        document.getElementById("stormyID").style.display='inline-block';
        document.getElementById("cloudyID").style.display='none';
    }
    if (response.data.weather.main = "Drizzle"){
        document.getElementById("rainyID").style.display='inline-block';
        document.getElementById("sunnyID").style.display='none';
        document.getElementById("snowyID").style.display='none';
        document.getElementById("stormyID").style.display='none';
        document.getElementById("cloudyID").style.display='none';
    }
    if (response.data.weather.main = "Rain"){
        document.getElementById("rainyID").style.display='inline-block';
        document.getElementById("sunnyID").style.display='none';
        document.getElementById("snowyID").style.display='none';
        document.getElementById("stormyID").style.display='none';
        document.getElementById("cloudyID").style.display='none';
    }
    if (response.data.weather.main = "Snow"){
        document.getElementById("rainyID").style.display='none';
        document.getElementById("sunnyID").style.display='none';
        document.getElementById("snowyID").style.display='inline-block';
        document.getElementById("stormyID").style.display='none';
        document.getElementById("cloudyID").style.display='none';
    }
    if (response.data.weather.main = "Clear"){
        document.getElementById("rainyID").style.display='none';
        document.getElementById("sunnyID").style.display='inline-block';
        document.getElementById("snowyID").style.display='none';
        document.getElementById("stormyID").style.display='none';
        document.getElementById("cloudyID").style.display='none';
    }
    if (response.data.weather.main = "Clouds"){
        document.getElementById("rainyID").style.display='none';
        document.getElementById("sunnyID").style.display='none';
        document.getElementById("snowyID").style.display='none';
        document.getElementById("stormyID").style.display='none';
        document.getElementById("cloudyID").style.display='inline-block';
    }
  } 

  let celsiusTemperature = null;
  let fahrenheitTemperature = null;
  let celsiusTempMax = null;
  let celsiusTempMin = null;
  let fahrenheitTempMax = null;
  let fahrenheitTempMin = null;
  let windspeedKilo = null;
  let windspeedMile = null;

  function convertToCel(event){
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
    fahElement.classList.remove('fahrenheitConversion2');
    fahElement.classList.add('fahrenheitConversion');
    let celElement = document.getElementById("celsiusConversionID");
    celElement.classList.remove('celsiusConversion');
    celElement.classList.add('celsiusConversion2');
    let kiloWindySpot = document.querySelector("#windyID");
    let kiloSpeed = windspeedKilo + " kph";
    kiloWindySpot.innerHTML = kiloSpeed;
  }

  function convertToFah(event){
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
      fahElement.classList.remove('fahrenheitConversion');
      fahElement.classList.add('fahrenheitConversion2');
      let celElement = document.getElementById("celsiusConversionID");
      celElement.classList.remove('celsiusConversion2');
      celElement.classList.add('celsiusConversion');
      let mileWindySpot = document.querySelector("#windyID");
      let mileSpeed = windspeedMile + " mph";
      mileWindySpot.innerHTML = mileSpeed;
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