const API_URL = process.env.API_URL || 'https://localhost:8080'
// Featured
// movies
export interface ApiQueryParams {
    [key: string]: string | number | boolean;
}
export interface  RequestOptions {
    page? :number;
    _limit? : number
    rating_like? : string 
}

export const defaultRequestOptions: RequestOptions = {
    page: 1,
    _limit: 10
}
export function buildQuerySting(params: ApiQueryParams){
    const query = Object.entries(params)
    .filter(([, value]) => value != undefined) 
    .map(([key, value]) => [key, encodeURIComponent(String(value))])

    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export async function apiRequest(
    endpoint: string,
    query: ApiQueryParams, 
    options: RequestOptions) {
    const mergeOptions: RequestOptions = {... defaultRequestOptions, ...options}
    const queryString: String = buildQuerySting({...query, ...mergeOptions});

    try{
        const response =  await fetch(`${API_URL}/${endpoint}${queryString}`)
        if(!response.ok){
            throw new Error(`API request failed: ${response.statusText}`)
        }
    }catch(error) {
      throw error
    }
}