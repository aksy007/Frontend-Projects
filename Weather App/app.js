// Weather Api : https://openweathermap.org/



// to change between Celsius to Fahrenheit
let unit = 0;

// Function to set values
const displayWeather = (data,city)=>{

    //console.log(data);
    //console.log(city)
    if(data.cod !== "404")
    {
        const {name} = data;
        const {icon , description} = data.weather[0];
        const {temp , humidity} = data.main;
        const {speed} = data.wind
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temperature").innerHTML = "Temperature : "+ Math.round(temp) + " °C";
        document.querySelector(".humidity").innerHTML = "Humidity : "+ humidity + " %";
        document.querySelector(".wind-speed").innerHTML = "Wind : "+ speed + " km/h";
        
        document.querySelector(".temperature").addEventListener('click', ()=>{
            if(unit === 1)
                document.querySelector(".temperature").innerHTML = "Temperature : "+ Math.round((1.8 * temp) + 32) + " °F";
            else
                document.querySelector(".temperature").innerHTML = "Temperature : "+ Math.round(temp) + " °C";
            (unit === 1)? unit = 0 : unit = 1;
        });
    }
    else{
        //console.log(data.message);
        alert(data.message)
        
    }
}


// Function to Fetch Weather Data
let weather = (city)=>{
    const APIKey = "ec820f78c85ab35cbd2d81ae127e927f";
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        +city 
        +"&units=metric&appid="
        +APIKey
        ).then( response => response.json())
        .then((data) => displayWeather(data,city))
        
}

const search = ()=> {
    weather(document.querySelector(".search-bar").value);
}


// Events to get input City value
document.querySelector(".search button").addEventListener("click", function () {
    search();
  });  
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search();
      }
});

// Default Search   
weather("Pune");
