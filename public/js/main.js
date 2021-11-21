// Weather Data

const submit = document.getElementById("submit");
const cityNameFeild = document.getElementById("cityNameFeild");
const showResult = document.getElementById("resultBlock");
const search_location = document.getElementById("location");
const curr_temp = document.getElementById("temp");

const getResult = async (e) => {
    e.preventDefault();
    let cityName = cityNameFeild.value;
    if (cityName == "") {
        alert("Please enter a city name");
        showResult.classList.add("invisible");
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=5aa712eadec55d3f69a326df8669cfa3`;
            let response = await fetch(url);
            let resData = await response.json();
            let arrResData = [resData]
            let notFound = arrResData[0].message;
            console.log(arrResData);
            console.log(notFound);

            if (notFound == "city not found") {
                alert("Please enter a correct city name");
                showResult.classList.add("invisible");
            }

            cityNameFeild.value = await "";

            let location_city = arrResData[0].name;
            let location_country = arrResData[0].sys.country;
            search_location.innerText = `${location_city}, ${location_country}`;
            let temp_result = arrResData[0].main.temp;
            curr_temp.innerText = `${temp_result}`;

            showResult.classList.remove("invisible");
        }
        catch (err) {
            console.log(err);
        }
    }

};

submit.addEventListener('click', getResult);

// Days and Date

const day = document.getElementById("day");
const date = document.getElementById("date");

const get_day = new Date().getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];
day.innerText = days[get_day];

const get_date = new Date().getDate();
const get_month = new Date().getMonth();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

date.innerText = `${get_date} ${months[get_month]}`;
