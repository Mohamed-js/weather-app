(()=>{"use strict";const e=(e,n,t)=>{let i=document.createElement(`${e}`);return i.textContent=`${n}`,i.classList.add(`${t}`),i};function n(){const e=arguments[0];for(let n=1;n<arguments.length;n++)e.appendChild(arguments[n])}const t=document.getElementById("content"),i=e("h1","Weather","head"),a=e("label","Enter country name:","label"),c=e("input","","input"),m=e("a","Get Weather","button"),r=e("div","","container"),d=e("img","","c-img");d.src="./imgs/load.gif",n(t,i,a,c,m,r),m.onclick=async()=>{r.innerHTML="",r.appendChild(d);let t=c.value,i=await(async e=>{let n={};return await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&lang=en&units=metric&appid=96234945f21abe7a841c8fc0306c59be`).then((function(e){return e.json()})).then((function(e){n.country=e.name,n.sky=e.weather[0].description,n.icon=e.weather[0].icon,n.windSpeed=e.wind.speed,n.windDirection=e.wind.deg,n.maxTemp=e.main.temp_max,n.minTemp=e.main.temp_min})).catch((function(e){return e})),n})(t);r.innerHTML="";let a=e("img","","c-img");a.src=`http://openweathermap.org/img/wn/${i.icon}@4x.png`,n(r,e("h2",i.country,"c-name"),a),n(r,e("label","Max-Temp","c-max"),e("h4",i.maxTemp+" °C","c-max")),n(r,e("label","Min-Temp","c-min"),e("h4",i.minTemp+" °C","c-min")),n(r,e("label","Wind Speed","c-speed"),e("h6",i.windSpeed,"c-speed")),n(r,e("label","Wind Direction","c-direction"),e("h6",i.windDirection+" deg","c-direction"))}})();