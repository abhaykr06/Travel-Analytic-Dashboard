import travelData from "./Data/Traveldata.js";


function combinedCountryData(apidata, travelData){
    const country = apidata[0]
    const country_code = country.cca2

    return{
        name: country.name.common,
        capital: country.capital?.[0],
        region: country.region,
        flag: country.flags.png,
        travel: travelData[country_code]
    }
}


function renderData(data) {
  document.getElementById("empty-state").style.display = "none";
  document.querySelector(".country-card").style.display = "flex";
  // FLAG
  document.getElementById("country-flag").src = data.flag;
  document.getElementById("country-flag").alt = data.name;

  // BASIC INFO
  document.getElementById("country-name").textContent = data.name;
  document.getElementById("country-capital").textContent = data.capital || "N/A";
  document.getElementById("country-region").textContent = data.region || "N/A";

  // TRAVEL INFO (SAFE CHECK)
  if (data.travel) {
    document.getElementById("country-cost").textContent =
      `Daily: ${data.travel.dailyCost}`;

    document.getElementById("country-hotel").textContent =
      `Hotel: ${data.travel.hotelCost}`;

    document.getElementById("country-visa").textContent =
      data.travel.visa;

    document.getElementById("country-food").textContent =
      data.travel.food.join(" • ");

    document.getElementById("country-besttime").textContent =
      data.travel.bestTime;
  } else {
    document.getElementById("country-visa").textContent =
      "Travel info coming soon";
  }
}

async function fetchCountryData(country_name) {
    try{
        console.log(`Fetching the data of ${country_name}`);
        const response = await fetch(`https://restcountries.com/v3.1/name/${country_name}?fullText=true`);

        const data = await response.json();
        const combineData =  combinedCountryData(data, travelData)
        renderData(combineData);
        console.log("Final combined data:", combineData);
}catch(error){
    console.log(`Something went wrong : ${error}`);
}
}
const searchInput = document.getElementById('input');
searchInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        const country_name = searchInput.value.trim()
        if(country_name){
            fetchCountryData(country_name)
        }
    }
})
