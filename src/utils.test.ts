import { TracesResponse } from './types';
import { findLongestDistanceAndMostTracedCountry } from './utils';

const testData: TracesResponse[] = [
    {
        "ip": "101.188.67.134",
        "name": "Australia",
        "code": "AU",
        "lat": -37.8159,
        "lon": 144.9669,
        "currencies": [
            {
                "iso": "AUD",
                "symbol": "A$",
                "conversion_rate": 1.5523136721334212
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 16675767.104582205
    },
    {
        "ip": "101.188.67.134",
        "name": "Australia",
        "code": "AU",
        "lat": -37.8159,
        "lon": 144.9669,
        "currencies": [
            {
                "iso": "AUD",
                "symbol": "A$",
                "conversion_rate": 1.5523136721334212
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 16675767.104582205
    },
    {
        "ip": "101.188.67.134",
        "name": "Australia",
        "code": "AU",
        "lat": -37.8159,
        "lon": 144.9669,
        "currencies": [
            {
                "iso": "AUD",
                "symbol": "A$",
                "conversion_rate": 1.5523136721334212
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 16675767.104582205
    },
    {
        "ip": "192.168.1.1",
        "name": "Canada",
        "code": "CA",
        "lat": 45.4215,
        "lon": -75.6906,
        "currencies": [
            {
                "iso": "CAD",
                "symbol": "C$",
                "conversion_rate": 1.257
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 5095707.559940558
    },
    {
        "ip": "210.138.184.59",
        "name": "Japan",
        "code": "JP",
        "lat": 35.6906,
        "lon": 139.77,
        "currencies": [
            {
                "iso": "JPY",
                "symbol": "¥",
                "conversion_rate": 148.28044524905872
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 10854061.4192188
    },
    {
        "ip": "210.138.184.59",
        "name": "Japan",
        "code": "JP",
        "lat": 35.6906,
        "lon": 139.77,
        "currencies": [
            {
                "iso": "JPY",
                "symbol": "¥",
                "conversion_rate": 148.28044524905872
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 10854061.4192188
    },
    {
        "ip": "210.138.184.59",
        "name": "Japan",
        "code": "JP",
        "lat": 35.6906,
        "lon": 139.77,
        "currencies": [
            {
                "iso": "JPY",
                "symbol": "¥",
                "conversion_rate": 148.28044524905872
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 10854061.4192188
    },
    {
        "ip": "210.138.184.59",
        "name": "Japan",
        "code": "JP",
        "lat": 35.6906,
        "lon": 139.77,
        "currencies": [
            {
                "iso": "JPY",
                "symbol": "¥",
                "conversion_rate": 148.28044524905872
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 10854061.4192188
    },
    {
        "ip": "210.138.184.59",
        "name": "Japan",
        "code": "JP",
        "lat": 35.6906,
        "lon": 139.77,
        "currencies": [
            {
                "iso": "JPY",
                "symbol": "¥",
                "conversion_rate": 148.28044524905872
            },
            {
                "iso": "USD",
                "symbol": "$",
                "conversion_rate": 1
            }
        ],
        "distance_to_usa": 10854061.4192188
    }
];

describe('findLongestDistanceAndMostTracedCountry', () => {
    test('should get data', () => {
        const [longestDistance, longestDistanceCountry, mostTracedCount, mostTracedCountry] = findLongestDistanceAndMostTracedCountry(testData);

        expect(longestDistance).toBe(16675767.104582205);
        expect(longestDistanceCountry).toBe('Australia');
        expect(mostTracedCount).toBe(5);
        expect(mostTracedCountry).toBe('Japan');
    })
})