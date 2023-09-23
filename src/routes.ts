import express, { Request, Response, NextFunction } from 'express';
import { data } from './data';
import { GeoResponse } from './types';
import { calcDistance, findLongestDistanceAndMostTracedCountry } from './utils';
const router = express.Router();

const API_KEY = 'b05f9defd60b202d30248da868119156';

router.post('/traces', async(req: Request, res: Response, next: NextFunction) => {
  const { ip } = req.body;

  try {
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=lat,lon,country,currency,countryCode`);
    if (!geoResponse.ok) {
      throw new Error('Failed to fetch IP geolocation data');
    }
    const geoData: GeoResponse = await geoResponse.json();
    const fixerResponse = await fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=${geoData.currency},USD`);
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

    res.status(200).json(jsonResponse);
  } catch (e) {
    next(e);
  }
});

router.get('/statistics', (req, res) => {
  const [longestDistance, longestDistanceCountry, mostTracedCount, mostTracedCountry] = findLongestDistanceAndMostTracedCountry(data);
  const jsonResponse = {
    'longest_distance': {
      'country': longestDistanceCountry,
      'value': longestDistance
    },
    'most_traced': {
      'country': mostTracedCountry,
      'value': mostTracedCount
    }
  };

  res.status(200).json(jsonResponse);
});

export default router;
