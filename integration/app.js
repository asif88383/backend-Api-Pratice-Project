let apiKey = 'https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=100&api_key=9568a91b93869f30cead4906329ad9801b280b027aff380f02147a09fb89051a';


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
        type: 'line',
        data:{
            lables: times,
            datasets:[{
                lable: '$',
                data:prices,
                backgroundColor:gradient,
                borderColor:'#f7931e',
                borderWidth: 3,
                borderJointStyle: 'round',
                pointHitRadius: 10,
                borderCapStyle: 'round',
                pointRadius:0,
                lineTension: .2,
            }]
        },
        options: {
            legend:{
                display: false
            },
            title: {
                display: false,
                text: 'Bitcoin Price'
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxis: [{
                    display: false,
                    gridLines: {}
                }],
                xAxis: [{
                    display: false,
                    gridLines: {}
                }]
            },
        }
    });
}


// const config = {
//     type: 'line',
//     data: data,
//     options: {}
// };

// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
// );

