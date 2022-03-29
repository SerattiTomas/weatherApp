import React, { useState } from "react";
import axios from 'axios';

const Weather = () => {
    
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    //const [latlong, setLanglong] = useState([])
    
    const searchLocation = (event) => {

        if(event.key==='Enter'){
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('');
        }
    }

    const handleOnKeyPress = (event) => {
        searchLocation(event);
        //animate(); AGREGAR ANIMAR FADE IN CUANDO APARECE NUEVA INFORMACION
    }

    /* AGREGAR OBTENER LA UBICACION ACTUAL Y MOSTRAR POR DEFECTO
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
      
    function success(pos) {

        var crd = pos.coords;

        setLanglong([crd.latitude, crd.longitude]);
        setLocation('');
      
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    };
      
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlong[0]}&lon=${latlong[1]}&appid=98e402318848071b246ab2fcd3ee8da2&units=metric&lang=es`;*/

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98e402318848071b246ab2fcd3ee8da2&units=metric&lang=es`;

    return(

        <div className="container">
            <input
                className="cityInput"
                type="text"
                value={location}
                onChange={event => setLocation(event.target.value)}
                onKeyPress={handleOnKeyPress}
                placeholder='Ingrese una ciudad'
            />
                
            <section className="info" id="info">
                {data.main ? null : <p>Weather App by Tomás Seratti</p>}
                <p id="lugar">{data.name}</p>
                {data.main ? <p id="temp">{(data.main.temp).toFixed(1)}°</p> : null /* Redondea, al primer decimal, la temperatura en grados celcius*/} 
                {data.main ? <p id="clima">{(data.weather[0].description).charAt(0).toUpperCase()+ (data.weather[0].description).slice(1)}</p> : null /* Transforma la primer letra de la descripción a mayusculas*/}

            </section>
        </div>

    );
}

export default Weather;