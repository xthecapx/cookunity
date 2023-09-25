import { data } from './data';
import { GeoResponse } from './types';
import { calcDistance, findLongestDistanceAndMostTracedCountry } from './utils';

export const postTraces = async(ip: string) => {
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=lat,lon,country,currency,countryCode`);
    if (!geoResponse.ok) {
      throw new Error('Failed to fetch IP geolocation data');
    }
    const geoData: GeoResponse = await geoResponse.json();
    const fixerResponse = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.DATA_FIXER_KEY}&symbols=${geoData.currency},USD`);
    const currencyData = await fixerResponse.json();

    const usd = currencyData.rates['USD'];
    const currentCurrency = currencyData.rates[geoData.currency];
    const usdRate = currentCurrency / usd;
    const options = { style: 'currency', currency: geoData.currency };
    const numberFormat = new Intl.NumberFormat(geoData.countryCode, options);
    const parts = numberFormat.formatToParts(1);
    const partValues = parts.map((p) => p.value);

    const jsonResponse = {
      'ip': ip,
      'name': geoData.country,
      'code': geoData.countryCode,
      'lat': geoData.lat,
      'lon': geoData.lon,
      'currencies': [
        {
          'iso': geoData.currency,
          'symbol': partValues[0],
          'conversion_rate': usdRate
        },
        {
          'iso': 'USD',
          'symbol': '$',
          'conversion_rate': 1
        }
      ],
      'distance_to_usa': calcDistance(geoData.lat, geoData.lon, 40.650002, -73.949997)
    };

    data.push(jsonResponse);

    return jsonResponse;
};

export const getStatistics = () => {
    const [longestDistance, longestDistanceCountry, mostTracedCount, mostTracedCountry] = findLongestDistanceAndMostTracedCountry(data);
    return {
      'longest_distance': {
        'country': longestDistanceCountry,
        'value': longestDistance
      },
      'most_traced': {
        'country': mostTracedCountry,
        'value': mostTracedCount
      }
    };
};

