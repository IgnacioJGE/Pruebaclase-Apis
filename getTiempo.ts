
import { place } from "./getPlace.ts";
type Tiempo={
    current: curr,
}
type curr={
    Temperatura:number
}
export const getTiempo=async (ciudad:place):Promise<curr> =>{
const BASE_URL="http://api.weatherapi.com/v1/current.json?";
const API_KEY="c5dc536080eb4d0e9b4105931230610";
const url= `${BASE_URL}Key=${API_KEY}&q=${ciudad.city}`;
const data= await fetch (url);
if(data.status!==200){
    throw new Error("Errorrrr")
}
const json= await data.json();
return{
 
    Temperatura: json.current.temp_c
}
}