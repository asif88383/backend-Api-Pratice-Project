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


}