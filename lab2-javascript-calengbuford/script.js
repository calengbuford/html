window.onload = function() {
  document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const city = document.getElementById("weatherInput").value;
    if (city === "")
      return;
    console.log(city);

    // Fetch and display information for current weather
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",US&units=imperial&APPID=5aada9714930f2835b77500a818aaf40";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);

        document.getElementById("error-catch").innerHTML = "";
        if (json.cod === "404") {
            document.getElementById("weatherResultsToday").innerHTML = "";
            document.getElementById("weatherResultsThreeHrs").innerHTML = "";
            document.getElementById("weatherResultsFiveDay").innerHTML = "";
            document.getElementById("error-catch").innerHTML = "Invalid city name";
            return;
        }

        let results = "";
        results += '<br><h2>' + json.name + " Weather Today</h2>";
        for (let i=0; i < json.weather.length; i++) {
  	      results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '&nbsp;&nbsp;';
        for (let i=0; i < json.weather.length; i++) {
  	      results += json.weather[i].description
  	      if (i !== json.weather.length - 1)
  	        results += ", "
        }
        results += "<br><strong>Curr. temp&nbsp;" + json.main.temp + " &deg;F</strong>";
        results += "<br>Max. temp&nbsp;" + json.main.temp_max + " &deg;F";
        results += "<br>Min. temp&nbsp;" + json.main.temp_min + " &deg;F</h2><br>&nbsp;";
        document.getElementById("weatherResultsToday").innerHTML = results;
      });

      // Fetch and display weather for the next 5 days
      const hourlyUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",US&units=imperial&APPID=5aada9714930f2835b77500a818aaf40";
      fetch(hourlyUrl)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);

        if (json.cod === "404") {
            return;
        }

        let results = "";
        let iter_start = 0;
        let iter_end = 7;

        results += "<br><h2>Next 5 Days</h2><br>";
        results += '<div class="padding-div">';
        results += '<h3>Day 1</h3>';
        for (let j = iter_start; j < iter_end; ++j) {
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += ' <img src="http://openweathermap.org/img/w/' + json.list[j].weather[i].icon + '.png"/>';
            }
            results += '&nbsp;&nbsp;';
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += json.list[j].weather[i].description
                if (i !== json.list[j].weather.length - 1)
                  results += ", "
            }
            results += "<strong>&nbsp;" + json.list[j].main.temp + " &deg;F</strong>";
        }
        results += '</div>';
        iter_start = iter_end;
        iter_end += 7

        results += '<div class="padding-div grey">';
        results += '<h3>Day 2</h3>';
        for (let j = iter_start; j < iter_end; ++j) {
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += ' <img src="http://openweathermap.org/img/w/' + json.list[j].weather[i].icon + '.png"/>';
            }
            results += '&nbsp;&nbsp;';
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += json.list[j].weather[i].description
                if (i !== json.list[j].weather.length - 1)
                  results += ", "
            }
            results += "<strong>&nbsp;" + json.list[j].main.temp + " &deg;F</strong>";
        }
        results += '</div>';
        iter_start = iter_end;
        iter_end += 7

        results += '<div class="padding-div">';
        results += '<h3>Day 3</h3>';
        for (let j = iter_start; j < iter_end; ++j) {
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += ' <img src="http://openweathermap.org/img/w/' + json.list[j].weather[i].icon + '.png"/>';
            }
            results += '&nbsp;&nbsp;';
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += json.list[j].weather[i].description
                if (i !== json.list[j].weather.length - 1)
                  results += ", "
            }
            results += "<strong>&nbsp;" + json.list[j].main.temp + " &deg;F</strong>";
        }
        results += '</div>';
        iter_start = iter_end;
        iter_end += 7

        results += '<div class="padding-div grey">';
        results += '<h3>Day 4</h3>';
        for (let j = iter_start; j < iter_end; ++j) {
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += ' <img src="http://openweathermap.org/img/w/' + json.list[j].weather[i].icon + '.png"/>';
            }
            results += '&nbsp;&nbsp;';
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += json.list[j].weather[i].description
                if (i !== json.list[j].weather.length - 1)
                  results += ", "
            }
            results += "<strong>&nbsp;" + json.list[j].main.temp + " &deg;F</strong>";
        }
        results += '</div>';
        iter_start = iter_end;
        iter_end += 7

        results += '<div class="padding-div">';
        results += '<h3>Day 5</h3>';
        for (let j = iter_start; j < iter_end; ++j) {
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += ' <img src="http://openweathermap.org/img/w/' + json.list[j].weather[i].icon + '.png"/>';
            }
            results += '&nbsp;&nbsp;';
            for (let i=0; i < json.list[j].weather.length; i++) {
                results += json.list[j].weather[i].description
                if (i !== json.list[j].weather.length - 1)
                  results += ", "
            }
            results += "<strong>&nbsp;" + json.list[j].main.temp + " &deg;F</strong>";
        }
        results += '</div>';
        document.getElementById("weatherResultsFiveDay").innerHTML = results + '<br>';
      });
  });
}
