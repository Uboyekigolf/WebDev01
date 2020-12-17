const axios = require('axios');
axios
.get('https://api.exchangeratesapi.io/latest')
.then( function (res)  { 
    console.log(`สกุลเงิน ${res.data.base}`);
    console.log(`ต่อบาทไทย ${res.data.rates.THB}`);
});