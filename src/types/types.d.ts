export interface InfoData {
    Id: string;
    PagodaMmName: string;
    PagodaEngName: string;
    Latitude: number;
    Longitude: number;
}

export interface BaganMapInfo {
    Id: string;
    Description: string;
}

export interface TravelData {
    TravelRouteId: string;
    TravelRouteName: string;
    TravelRouteDescription: string;
    PagodaList: string[];
}
