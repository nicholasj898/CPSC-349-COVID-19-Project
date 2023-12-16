fetch('https://disease.sh/v3/covid-19/all')
.then((response)=>{
    return response.json();
})

.then((data)=>{

    document.getElementById("active").innerHTML = data.active.toLocaleString();

    document.getElementById("cases").innerHTML = data.cases.toLocaleString();

    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();

    document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
})