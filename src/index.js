const select = document.getElementById("temperatureType");
const submit = document.getElementById("submit");
const temp = document.getElementById("temperature");
const toTemp = document.getElementById("convertTo");
const result = document.querySelector('.result');

function toCelsius(num, fromTemp) {
  if (fromTemp === "kelvin") {
    let result = num - 273.15;
    return `${result} &deg;C`;
  } else if (fromTemp === "fahrenheit") {
    let result = (num - 32) * (5 / 9);
    return `${result} &deg;C`;
  } else {
    console.log("%cyou shouldn't see this", "color:green; font-size:5rem;");
  }
}

function toFahrenheit(num, fromTemp) {
  if (fromTemp === "celsius") {
    let result = num * (9 / 5) + 32;
    return `${result} &deg;F`;
  } else if (fromTemp === "kelvin") {
    let result = (num - 273.15) * (9 / 5) + 32;
    return `${result} &deg;F`;
  } else {
    console.log("%cyou shouldn't see this", "color:green; font-size:5rem;");
  }
}

function toKelvin(num, fromTemp) {
    if (fromTemp === "celsius") {
      let result =num+273.15;
        return `${result} K`;
    } else if ( fromTemp === "fahrenheit") {
      let result =(num-32)*(5/9)+273.15;
        return `${result} K`;
    }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    if (select.value === toTemp.value) {
      alert("Please select another temperature");
      temp.value = "";
    } else {
      switch (toTemp.value) {
        case "celsius":
          console.log(toCelsius(temp.value, select.value));
          result.innerHTML = toCelsius(temp.value, select.value);
          break;
        case "fahrenheit":
          console.log(toFahrenheit(temp.value, select.value));
          result.innerHTML = toFahrenheit(temp.value, select.value);
          break;
        case "kelvin":
          console.log(toKelvin(temp.value, select.value));
          result.innerHTML = toKelvin(temp.value, select.value);
      }
    }
  } catch (err) {
    throw new Error("Sorry, any has stopped the process " + err);
  }
});
