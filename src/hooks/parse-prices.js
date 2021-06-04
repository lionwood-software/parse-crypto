// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const axios = require('axios');
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const {pairs: { tokens, fiats }} = context;
    
    const result = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${tokens}&tsyms=${fiats}`, { responseType: 'json'});
    
    context.data = result.data;
    
    return context;
  };
};
