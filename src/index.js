import * as components from './components'

const content = document.getElementById('content')
const head = components.text('h1', 'Weather', 'head')
const label = components.text('label', 'Enter country name:', 'label')
const input = components.text('input', '', 'input')
const btn = components.text('a', 'Get Weather', 'button')
const container = components.text('div', '', 'container')
const loadContainer = components.text('div', '', 'load-contianer');
const load = components.text('img', '', 'c-img');
load.src = './imgs/load.gif';

components.appendAll(content, head, label, input, btn, loadContainer, container)

btn.onclick = async () => {

    // Empty container and make loading icon
    container.innerHTML = ''
    loadContainer.innerHTML = ''
    loadContainer.appendChild(load)

    // Get and store the data 
    let country = input.value
    let weather = await components.getData(country);

    // Empty container from loading and get img src
    
    let img = components.text('img', '', 'c-img') ;
    img.src = `http://openweathermap.org/img/wn/${weather.icon}@4x.png`;

    // Handle error
    if (weather.country !== undefined) {
        loadContainer.innerHTML = ''
        // Append weather info
        components.appendAll(container, components.text('h2', weather.country, 'c-name'), img)
        components.appendAll(container, components.text('label', 'Max-Temp', 'c-max'), components.text('h4', weather.maxTemp + ' °C', 'c-max'))
        components.appendAll(container, components.text('label', 'Min-Temp', 'c-min'), components.text('h4', weather.minTemp + ' °C', 'c-min'))
        components.appendAll(container, components.text('label', 'Wind Speed', 'c-speed'), components.text('h6', weather.windSpeed, 'c-speed'))
        components.appendAll(container, components.text('label', 'Wind Direction', 'c-direction'), components.text('h6', weather.windDirection + ' deg', 'c-direction'))
    } else if (weather.country === undefined) {
        setTimeout(() => {
            loadContainer.innerHTML = ''
            components.appendAll(loadContainer, components.text('h3', `Sorry, we couldn't identify the name.`, 'err1'), components.text('h3', `Please check the name and re-try.`, 'err2'))
        }, 2000);
    } 
}
