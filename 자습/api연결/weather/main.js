const getWeather = () => {
  let result = 0;
  fetch("https://goweather.herokuapp.com/weather/Curitiba")
    .then((respone) => respone.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });

  return result;
};

let weather = getWeather();
console.log(weather);
