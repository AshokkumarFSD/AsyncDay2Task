

fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        validateData(json);
    }
    );

function validateData(jsonData) {
    let detailsContainer = document.getElementById("parent_container");
    detailsContainer.style.padding = '10px';
    for (i = 0; i < jsonData.length; i++) {
        createSingleCard(jsonData[i]);
    }
}


function createSingleCard(singleCountryDetail) {
    let cardContianer = document.createElement("div");
    cardContianer.setAttribute("class", "card");
    cardContianer.setAttribute("class", "col");
    cardContianer.setAttribute("id",singleCountryDetail.cca2);

    let countryName = document.createElement("p");
    countryName.setAttribute("class", "country_header");
    countryName.innerText = singleCountryDetail.name.common;

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card_body");

    let countryFlag = document.createElement("img");
    countryFlag.setAttribute("class", "country_flag");
    countryFlag.setAttribute("src", singleCountryDetail.flags.png);

    let capital = document.createElement("p");
    capital.setAttribute("class", "country_details");
    capital.innerText = "Capital : " + singleCountryDetail.capital;

    let region = document.createElement("p");
    region.setAttribute("class", "country_details");
    region.innerText = "Region : " + singleCountryDetail.region;

    let countryCode = document.createElement("p");
    countryCode.setAttribute("class", "country_details");
    countryCode.innerText = "County code : " + singleCountryDetail.cca2;

    let weatherBtn = document.createElement("button");
    weatherBtn.setAttribute("class", "btn_primary");
    weatherBtn.innerText = "Click for Weather"

    weatherBtn.addEventListener('click',()=>{
        getWeatherReport(singleCountryDetail);
    });

    cardBody.append(countryFlag);
    cardBody.append(capital);
    cardBody.append(region);
    cardBody.append(countryCode);
    cardBody.append(weatherBtn);

    cardContianer.append(countryName);
    cardContianer.append(cardBody);

    let detailsContainer = document.getElementById("parent_container");

    detailsContainer.append(cardContianer);


}


function getWeatherReport(singleCountryDetail)
{
    const lat = singleCountryDetail.latlng[0]; 
    const lang = singleCountryDetail.latlng[1]; 
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=a12e8e7962318affe9076a20122a4423`;
    
    fetch(api)
    .then((response) => response.json())
    .then((json) => {
       updateWetherDetails(singleCountryDetail,json)
    }
    );
}

function updateWetherDetails(singleCountryDetail,weatherDetails)
{
    let singleCountry = document.getElementById(singleCountryDetail.cca2);
    singleCountry.innerHTML = '';

    let countryName = document.createElement("p");
    countryName.setAttribute("class", "country_header");
    countryName.innerText = singleCountryDetail.name.common;

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card_body");

    let countryFlag = document.createElement("img");
    countryFlag.setAttribute("class", "country_flag");
    countryFlag.setAttribute("src", singleCountryDetail.flags.png);

    let description = document.createElement("p");
    description.setAttribute("class", "country_details");
    description.innerText = "Desc : " + weatherDetails.weather[0].description;

    let temp = document.createElement("p");
    temp.setAttribute("class", "country_details");
    temp.innerText = "Temp : " + weatherDetails.main.temp;
    

    let humidity = document.createElement("p");
    humidity.setAttribute("class", "country_details");
    humidity.innerText = "Humidity : " + weatherDetails.main.humidity;

    let goBack = document.createElement("button");
    goBack.setAttribute("class", "btn_primary");
    goBack.innerText = "Go Back";
    
    goBack.addEventListener('click',()=>{
        backToDetails(singleCountryDetail);
    });

    cardBody.append(countryFlag);
    cardBody.append(description);
    cardBody.append(temp);
    cardBody.append(humidity);
    cardBody.append(goBack);

    singleCountry.append(countryName);
    singleCountry.append(cardBody);
}

function backToDetails(singleCountryDetail)
{
    let singleCountry = document.getElementById(singleCountryDetail.cca2);
    singleCountry.innerHTML = '';

    let countryName = document.createElement("p");
    countryName.setAttribute("class", "country_header");
    countryName.innerText = singleCountryDetail.name.common;

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card_body");

    let countryFlag = document.createElement("img");
    countryFlag.setAttribute("class", "country_flag");
    countryFlag.setAttribute("src", singleCountryDetail.flags.png);

    let capital = document.createElement("p");
    capital.setAttribute("class", "country_details");
    capital.innerText = "Capital : " + singleCountryDetail.capital;

    let region = document.createElement("p");
    region.setAttribute("class", "country_details");
    region.innerText = "Region : " + singleCountryDetail.region;

    let countryCode = document.createElement("p");
    countryCode.setAttribute("class", "country_details");
    countryCode.innerText = "County code : " + singleCountryDetail.cca2;

    let weatherBtn = document.createElement("button");
    weatherBtn.setAttribute("class", "btn_primary");
    weatherBtn.innerText = "Click for Weather"

    weatherBtn.addEventListener('click',()=>{
        getWeatherReport(singleCountryDetail);
    });

    cardBody.append(countryFlag);
    cardBody.append(capital);
    cardBody.append(region);
    cardBody.append(countryCode);
    cardBody.append(weatherBtn);

    singleCountry.append(countryName);
    singleCountry.append(cardBody);
}