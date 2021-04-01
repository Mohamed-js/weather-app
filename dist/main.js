(()=>{"use strict";const e=(e,n,t)=>{let i=document.createElement(`${e}`);return i.textContent=`${n}`,i.classList.add(`${t}`),i};function n(){const e=arguments[0];for(let n=1;n<arguments.length;n++)e.appendChild(arguments[n])}const t=document.getElementById("content"),i=e("h1","Weather","head"),a=e("label","Enter country name:","label"),c=e("input","","input"),r=e("a","Get Weather","button"),o=e("div","","container"),d=e("div","","load-contianer"),m=e("img","","c-img");m.src="./imgs/load.gif",n(t,i,a,c,r,d,o),r.onclick=async()=>{o.innerHTML="",d.innerHTML="",d.appendChild(m);let t=c.value,i=await(async e=>{let n={};return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&lang=en&units=metric&appid=96234945f21abe7a841c8fc0306c59be`).then((function(e){return e.json()})).then((function(e){n.country=e.name,n.sky=e.weather[0].description,n.icon=e.weather[0].icon,n.windSpeed=e.wind.speed,n.windDirection=e.wind.deg,n.maxTemp=e.main.temp_max,n.minTemp=e.main.temp_min})).catch((function(e){return e})),n})(t),a=e("img","","c-img");a.src=`http://openweathermap.org/img/wn/${i.icon}@4x.png`,void 0!==i.country?(d.innerHTML="",n(o,e("h2",i.country,"c-name"),a),n(o,e("label","Max-Temp","c-max"),e("h4",i.maxTemp+" °C","c-max")),n(o,e("label","Min-Temp","c-min"),e("h4",i.minTemp+" °C","c-min")),n(o,e("label","Wind Speed","c-speed"),e("h6",i.windSpeed,"c-speed")),n(o,e("label","Wind Direction","c-direction"),e("h6",i.windDirection+" deg","c-direction"))):setTimeout((()=>{d.innerHTML="",n(d,e("h3","Sorry, we couldn't identify the name.","err1"),e("h3","Please check the name and re-try.","err2"))}),2e3)}})();