export interface GeocodeResult {
  latitude: number
  longitude: number
  displayName: string
}

export declare function findKnownCityCoordinates(query: string): GeocodeResult | null
export declare function geocodeLocation(query: string): Promise<GeocodeResult | null>
