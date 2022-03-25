let apiKey = "";


// fetch Bitcoin data
const btcData = async() =>{
    const response = await fetch(apiKey);
    const json = await response.json();
    const data = json.Data.Data;
    const times = data.map(key=> key.time);
    const prices = data.map(key=>key.high);
    return{
        times,
        prices
    }
}

// fetch Ethereum Data
const ethData = async()=>{
    const response = await fetch(apiKey);
    const json = await response.json();
    const data = json.Data.Data;
    const times = data.map(key => key.high);
    const prices = data.map(key => key.high);
    return{
        times,
        prices
    }

}


let BTCChart;

async function createBTCChart(){
    let {times,prices} = await btcData();
    let btcChart = document.getElementById('btcChart').getContext('2d');
    let gradient = btcChart.createLinearGradient(0,0,0,400);

    gradient.addColorStop(0, 'rgba(247, 147, .5)');
    BTCChart = new Chart(btcChart, {
        
    });
}