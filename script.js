const apiUrl = "https://covid-19.dataflowkit.com/v1";
let daten;

async function getData(){
    const response = await fetch(apiUrl);
    const data = await response.json();
    daten = data;
    console.log(data[0]);
    var x = document.getElementById("countries");
    
    for (let i = 0; i < data.length -1; i++){
        var option = document.createElement("option");
        option.text = data[i]["Country_text"];
        x.add(option);
    }

    test("World");
}

document.getElementById("countries").addEventListener("change", function(){
    let country = document.getElementById("countries").value;
    test(country);
    changeIfEmpty();
})

function test(country) {
    for (let i = 0; i < daten.length -1; i++){
        if (daten[i]["Country_text"] == country){
            document.getElementById("countryText").innerHTML = daten[i]["Country_text"];
            document.getElementById("activeCases").innerHTML = daten[i]["Active Cases_text"];
            document.getElementById("lastUpdate").innerHTML = daten[i]["Last Update"];
            document.getElementById("newCases").innerHTML = daten[i]["New Cases_text"];
            document.getElementById("newDeaths").innerHTML = daten[i]["New Deaths_text"];
            document.getElementById("totalCases").innerHTML = daten[i]["Total Cases_text"];
            document.getElementById("totalDeaths").innerHTML = daten[i]["Total Deaths_text"];
            document.getElementById("newDeaths").innerHTML = daten[i]["Total Deaths_text"];
            document.getElementById("totalRecovered").innerHTML = daten[i]["Total Recovered_text"];
        }
    }
}

function changeIfEmpty(){
    let TDs = document.getElementsByTagName("td");
    for (let i = 0; i < TDs.length; i++){
        if (TDs[i].innerHTML == ""){
            TDs[i].innerHTML = "n/a";
        }
    }
}

getData();