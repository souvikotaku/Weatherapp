import './App.css';
import {useState} from 'react';

function App() {


  const [city,setCity] = useState('')
  const [cityname,setCityName] = useState('')
  const [citydesc,setCityDesc] = useState('')
 
  let wTemp = document.querySelector(".temp");
  let wIcon = document.querySelector("#image");
  
  const clickWeather = ()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7353020ee6b5ea4e932e98307c3b700e`)
       .then(Response=>Response.json())
       .then(data=> {
          setCityName(data.name);
          setCityDesc(data.weather[0].description);
          wTemp.innerHTML = data['main']['temp']+'&#8451';

          let iconCode = data['weather'][0]['icon'];
          wIcon.innerHTML = "<img src='https://openweathermap.org/img/wn/"+iconCode+"@2x.png'>";
       })
  .catch(err=>alert("wrong city name!"))
  
   
  }
  




  return (

    <div class='body'>
      <video src='/videos/weathervid.mp4' autoPlay loop muted style={{width:'100%',height:'auto'}}/>

      <div className="App">
      <div class="mainbox">
        <div class="searchbox">
            <div class="inputbox">
                <input type="text" class="inputVal" placeholder="Enter City Name"
                value={city} 
                 onChange={(event)=>{
                  setCity(event.target.value)
                }}
                />
                <input type="submit" class="clicksub" 
                value='Submit' 
                onClick={clickWeather}
                
                /><br/>
            </div>   
            <h1 class="name">{cityname}</h1>
            <p class="desc">{citydesc}</p>
            <span class="temp"></span>
            <div id="image"></div><br/>
            <span id="creator" style={{backgroundColor:'lightgrey',color:'black',borderRadius:'5px',padding: '6px 6px'}}>Created by Souvik Das</span>
        </div>
    </div>

    </div>
    </div>
    
  );
}

export default App;
