const API_KEY = "ccf43c234d34e257d90c49b03c74f165";

const button = document.querySelector(".button");
const tempSection = document.querySelector(".temp");
const placeSection = document.querySelector(".place");
const descriptionSection = document.querySelector(".description");
const iconSection = document.querySelector(".icon");

button.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

const success = (position) => {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};
const fail = () => {
  alert("좌표 받기 실패");
};

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const temp = data.main.temp;
      const place = data.name;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      tempSection.innerText = temp;
      placeSection.innerText = place;
      descriptionSection.innerText = description;
      iconSection.setAttribute("src", iconURL);
    })
    .catch((err) => alert(err));
};
