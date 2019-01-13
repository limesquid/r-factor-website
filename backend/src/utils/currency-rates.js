const request = require('request-promise-native');

const NBP_API_ORIGIN = 'http://api.nbp.pl/api';

export const getCurrencyRate = async (currency, date) => {
  const currencyRateDetails = await request.get({
    url: `${NBP_API_ORIGIN}/exchangerates/rates/A/${currency}/${date}`,
    json: true
  });

  return currencyRateDetails.rates[0].mid;
};

export const getUsdRate = (date) => getCurrencyRate('USD', date);
