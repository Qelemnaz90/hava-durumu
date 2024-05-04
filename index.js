const API_KEY = `2fc6e4f10dfda63dfc74752f77ac98d2`

const searchTemperature = () => {
    console.log("Search button clicked");
    const city = document.getElementById('inp').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}


const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temp', `${Math.round(temperature.main.temp - 273.15)}°C`);
    setInnerText('weather', temperature.weather[0].main);

    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}.png`;
    const imgIcon = document.getElementById('image-icon');
    imgIcon.setAttribute('src', url);
}


const handleKeyPress = event => {
    if (event.key === 'Enter') {
        searchTemperature();
    }
};

document.getElementById('inp').addEventListener('keypress', handleKeyPress);
