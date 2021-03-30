import * as components from './components'

const content = document.getElementById('content')
const head = components.text('h1', 'Weather', 'head')
const label = components.text('label', 'Enter country name:', 'label')
const input = components.text('input', '', 'input')
const btn = components.text('button', 'Get', 'button')
const container = components.text('div', '', 'container')

content.appendChild(head)
content.appendChild(label)
content.appendChild(input)
content.appendChild(btn)
content.appendChild(container)

btn.onclick = async () => {
    container.innerHTML = ''
    let country = input.value
    let weather = components.getData(country)
    console.log(weather)

    let name = components.text('h2', weather, 'name')
    container.appendChild(name)
}


// container