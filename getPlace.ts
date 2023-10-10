export type place={
    city: string,
    country:string
}
export const getPlace=async (zip:string):Promise<place> =>{
const BASE_URL="http://postalcode.parseapi.com/api";
const API_KEY="6f88df029fc994ac750d3c30bed6edab";
const url= `${BASE_URL}/${API_KEY}/${zip}`;
const data= await fetch (url);
if(data.status!==200){
    throw new Error("Errorrrr")
}
const json= await data.json();
return{
    city:json.city.name,
    country: json.country.name
   
}
}