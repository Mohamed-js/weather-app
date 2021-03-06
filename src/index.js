import * as components from "./components";

const content = document.getElementById("content");
const head = components.text("h1", "Weather", "head");
const label1 = components.text("label", "Celsius °C", "label");
const label2 = components.text("label", "Fahrenheit °F", "label");
const select1 = components.text("input", "", "radio");
select1.value = "metric";
select1.type = "radio";
select1.name = "unit";
select1.checked = true;
const select2 = components.text("input", "", "radio");
select2.value = "imperial";
select2.type = "radio";
select2.name = "unit";
const label = components.text("label", "Enter country name:", "label");
const input = components.text("input", "", "input");
const btn = components.text("a", "Get Weather", "button");
const container = components.text("div", "", "container");
const loadContainer = components.text("div", "", "load-contianer");
const load = components.text("img", "", "c-img");
load.src = "./imgs/load.gif";

components.appendAll(
  content,
  head,
  label,
  input,
  btn,
  select1,
  label1,
  select2,
  label2,
  loadContainer,
  container
);

btn.onclick = async () => {
  // Get the Unit
  let unit;
  const select = document.getElementsByName("unit");
  for (var i = 0; i < select.length; i++) {
    if (select[i].checked) {
      unit = select[i].value;
      break;
    }
  }

  // Empty container and make loading icon
  container.innerHTML = "";
  loadContainer.innerHTML = "";
  loadContainer.appendChild(load);

  // Get and store the data
  let country = input.value;
  let weather = await components.getData(country, unit);

  // Empty container from loading and get img src
  if (unit === "metric") {
    unit = "°C";
  } else {
    unit = "°F";
  }
  let img = components.text("img", "", "c-img");
  img.src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  if (weather.country === undefined) {
    // Handle error
    loadContainer.innerHTML = "";
    components.appendAll(
      loadContainer,
      components.text("h3", `Sorry, please enter a valid name.`, "err1")
    );
  } else {
    loadContainer.innerHTML = "";
    // Append weather info
    components.appendAll(
      container,
      components.text("h2", weather.country, "c-name"),
      img
    );
    components.appendAll(
      container,
      components.text("label", "Max-Temp", "c-max"),
      components.text("h4", weather.maxTemp + ` ${unit}`, "c-max")
    );
    components.appendAll(
      container,
      components.text("label", "Min-Temp", "c-min"),
      components.text("h4", weather.minTemp + ` ${unit}`, "c-min")
    );
    components.appendAll(
      container,
      components.text("label", "Wind Speed", "c-speed"),
      components.text("h6", weather.windSpeed, "c-speed")
    );
    components.appendAll(
      container,
      components.text("label", "Wind Direction", "c-direction"),
      components.text("h6", weather.windDirection + " deg", "c-direction")
    );
  }
};

const selects = document.getElementsByName("unit");
for (var i = 0; i < selects.length; i++) {
  selects[i].onclick = async () => {
    // Get the Unit
    let unit;
    const select = document.getElementsByName("unit");
    for (var i = 0; i < select.length; i++) {
      if (select[i].checked) {
        unit = select[i].value;
        break;
      }
    }
  
    // Empty container and make loading icon
    container.innerHTML = "";
    loadContainer.innerHTML = "";
    loadContainer.appendChild(load);
  
    // Get and store the data
    let country = input.value;
    let weather = await components.getData(country, unit);
  
    // Empty container from loading and get img src
    if (unit === "metric") {
      unit = "°C";
    } else {
      unit = "°F";
    }
    let img = components.text("img", "", "c-img");
    img.src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;
  
    if (weather.country === undefined) {
      // Handle error
      loadContainer.innerHTML = "";
      components.appendAll(
        loadContainer,
        components.text("h3", `Sorry, please enter a valid name.`, "err1")
        
      );
    } else {
      loadContainer.innerHTML = "";
      // Append weather info
      components.appendAll(
        container,
        components.text("h2", weather.country, "c-name"),
        img
      );
      components.appendAll(
        container,
        components.text("label", "Max-Temp", "c-max"),
        components.text("h4", weather.maxTemp + ` ${unit}`, "c-max")
      );
      components.appendAll(
        container,
        components.text("label", "Min-Temp", "c-min"),
        components.text("h4", weather.minTemp + ` ${unit}`, "c-min")
      );
      components.appendAll(
        container,
        components.text("label", "Wind Speed", "c-speed"),
        components.text("h6", weather.windSpeed, "c-speed")
      );
      components.appendAll(
        container,
        components.text("label", "Wind Direction", "c-direction"),
        components.text("h6", weather.windDirection + " deg", "c-direction")
      );
    }
  };
}

