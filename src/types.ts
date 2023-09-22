export interface GeoResponse {
    country: string;
    countryCode: string;
    lat: number;
    lon: number;
    currency: string;
}

export interface TracesResponse {
    ip: string;
    name: string;
    code: string;
    lat: number;
    lon: number;
    currencies: {
        iso: string;
        symbol: string;
        conversion_rate: number;
    }[];
    distance_to_usa: number;
}
