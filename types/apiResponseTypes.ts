export interface ResponseItem {
  rowIndex: number;
  countryCode: string;
  pincode: string;
  placeName: string;
  state: string;
  stateCode: number;
  district: string;
  city: string;
  lat: number;
  lon: number;
  accuracy: number;
}

export type ResponseType = {
  results: ResponseItem[];
  hasNextPage: boolean;
};
