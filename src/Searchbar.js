import React from "react";

const Searchbar = () =>{

    const citiesOptionTemplate = document.querySelector("[data-cities-template]");

    fetch("https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json")
    .then(res => res.json())
    .then(data => {
        const option = citiesOptionTemplate.content.cloneNode(true);
        console.log(option);
    });

    return(
        <>
        <h1>Searchbar</h1>
        <input
                className="cityInput"
                type="text"               
                placeholder='Ingrese una ciudad'
                list="cities"
        />
        <datalist id="cities">
            <option value="Delhi"/>
        </datalist>
        <template data-cities-template>
            <div className="option">
            <datalist id="cities">
                <option/>
            </datalist>
            </div>
        </template>
        </>
    )
}

export default Searchbar;