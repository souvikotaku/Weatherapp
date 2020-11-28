var inputValue = document.querySelector(".inputVal");
var button = document.querySelector(".clicksub");
var wName = document.querySelector(".name");
var wDesc = document.querySelector(".desc");
var wTemp = document.querySelector(".temp");
var wIcon = document.querySelector("#image");

button.addEventListener('click',()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=7353020ee6b5ea4e932e98307c3b700e')
     .then(Response=>Response.json())
     .then(data=> {
        wName.innerHTML = data['name'];
        wDesc.innerHTML = data['weather'][0]['description'];
        wTemp.innerHTML = data['main']['temp']+'&#8451';
        var iconCode = data['weather'][0]['icon'];
        wIcon.innerHTML = "<img src='http://openweathermap.org/img/wn/"+iconCode+"@2x.png'>";
     })
.catch(err=>alert("wrong city name!"))

 
})

