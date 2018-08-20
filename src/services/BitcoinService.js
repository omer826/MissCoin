
import axios from 'axios'
function getBitCoinRate() {
    return axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
        .then(({ data }) => data);
}

function getStatisticsData(api) {
    return axios.get(api)
    .then(({ data }) => data);
}




export default {
    getBitCoinRate,
    getStatisticsData
}