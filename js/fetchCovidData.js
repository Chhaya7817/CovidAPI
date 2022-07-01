const api_url="https://api.covid19api.com/summary";
function getApiData()
{
    fetch(api_url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      this.data = data;
      displayData();
    })
    .catch((error) => console.log(error.message));
    
}
var data;
function displayData(){
  for (let i of data.Countries)
 {
  var c=document.getElementById("country").value;
 if(i.Country==c)
 {
 document.getElementById("cname").textContent=i.Country;
 document.getElementById("date").textContent=new Date().toDateString();
 document.getElementById("Tcases").textContent=i.TotalConfirmed;
 document.getElementById("Tdeaths").textContent=i.TotalDeaths;
 document.getElementById("Ncases").textContent=i.NewConfirmed;
 document.getElementById("Ndeaths").textContent=i.NewDeaths;

 }
}
}
getApiData();