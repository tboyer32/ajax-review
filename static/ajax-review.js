// PART 1: SHOW A FORTUNE

function showFortune() {
  fetch('/fortune')
  .then(response => response.text())
  .then(responseData => {
    document.querySelector('#fortune-text').innerText = responseData;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode-field').value;
  const url = `/weather?zipcode=${zipcode}`;
  
  fetch(url)
    .then(response => response.json())
    .then(responseData => {
      document.querySelector('#weather-info').innerText = responseData.forecast;
    });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);
