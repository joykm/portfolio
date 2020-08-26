var apiKey = "2ef800681313df980f1caa85997c2cfb";

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons(){
    document.getElementById('citySubmit').addEventListener("click", function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var city = document.getElementById("city");
        var countryCity = document.getElementById("countryCity");

        if (city.value !== "" && countryCity.value !== "") {
            req.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + ", " + countryCity.value + "&appid=" + apiKey + "&units=imperial", true);
            req.addEventListener('load', function() {
                if(req.status >= 200 && req.status < 400)  {
                    var response = JSON.parse(req.responseText);
                    // console.log(response)
                    document.getElementById("weatherOutput").innerText = 
                        "Location: " + response.name + ", " + response.sys.country +
                        "\nTemperature: " + response.main.temp + "°F" +
                        "\nConditions: " + response.weather[0].description +
                        "\nWind: " + response.wind.speed + "mph" +
                        "\nHumidity: " + response.main.humidity + "%" +
                        "\nFeels like: " +response.main.feels_like + "°F";
                
                    document.getElementById('api-city').reset();      
                }
                else {
                    console.log("Error in network request: " + req.statusText);  
                    document.getElementById("weatherOutput").innerText = 
                        "Request not found. Please ensure both the city and country code are valid."
                }
            });
            document.getElementById('api-zip').reset();
            req.send(null);
        } else {
            if (city.value === "" && countryCity.value === "") {
                document.getElementById("weatherOutput").innerText = 
                    "Please enter a value for both the city and country code fields.";
            } else {
                var output = "Please enter a value for the ";
                if (city.value === "") {
                    output += "city ";
                } else {
                    output += "country code ";
                }
                output += "field."
                document.getElementById("weatherOutput").innerText = output;
            }
        }
        document.getElementById('api-zip').reset();
    });

    document.getElementById('zipSubmit').addEventListener("click", function(event){
        event.preventDefault();
        var req = new XMLHttpRequest();
        var zip = document.getElementById("zip");
        var countryZip = document.getElementById("countryZip");

        if (zip.value !== "" && countryZip.value !== "") {
            req.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + zip.value + ", " + countryZip.value + "&appid=" + apiKey + "&units=imperial", true);
            req.addEventListener('load', function() {
                if(req.status >= 200 && req.status < 400) {
                    var response = JSON.parse(req.responseText);
                    document.getElementById("weatherOutput").innerText = 
                        "Location: " + response.name + ", " + response.sys.country +
                        "\nTemperature: " + response.main.temp + "°F" +
                        "\nConditions: " + response.weather[0].description +
                        "\nWind: " + response.wind.speed + "mph" +
                        "\nHumidity: " + response.main.humidity + "%" +
                        "\nFeels like: " +response.main.feels_like + "°F";

                    document.getElementById('api-zip').reset();
                }
                else {
                    console.log("Error in network request: " + req.statusText);  
                    document.getElementById("weatherOutput").innerText = 
                        "Request not found. Please ensure both the city and country code are valid."  
                }
            });
            document.getElementById('api-city').reset();
            req.send(null);
        } else {
            if (zip.value === "" && countryZip.value === "") {
                document.getElementById("weatherOutput").innerText = 
                    "Please enter a value for both the zip and country code fields.";
            } else {
                var output = "Please enter a value for the ";
                if (zip.value === "") {
                    output += "zip ";
                } else {
                    output += "country code ";
                }
                output += "field."
                document.getElementById("weatherOutput").innerText = output;
            }
        }
        document.getElementById('api-city').reset();
    });
}