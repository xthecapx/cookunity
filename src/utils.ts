import { TracesResponse } from './types';

export const calcDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in metres
};

export const findLongestDistanceAndMostTracedCountry = (data: TracesResponse[]): [number, string, number, string] => {
    return data.reduce<[number, string, number, string]>((result, item) => {
        if (item.distance_to_usa > result[0]) {
            result[0] = item.distance_to_usa;
            result[1] = item.name;
        }

        const countryCount = data.filter((x) => x.name === item.name).length;

        if (countryCount > result[2]) {
            result[2] = countryCount;
            result[3] = item.name;
        }

        return result;
    }, [-Infinity, '', 0, '']);
};
