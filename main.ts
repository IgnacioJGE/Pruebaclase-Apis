
import espress,{Request,Response} from "npm:express@4.18.2"
import { getPlace } from "./getPlace.ts";
import { getTiempo } from "./getTiempo.ts";
const miapp= espress();


miapp.get("/",(req:Request, res: Response) => {// lo que hay en "/" es donde se encuentra en el navegador por ejemplo en este caso seria el directorio base
res.send("Hola Mundo");

})
.get("/Saluda",(req:Request, res: Response) => {//Aquí esta en el /Saluda
  res.send("Holaaaaaaa");
  
  })
  .get("/Saluda/:nombre",(req:Request, res: Response) => {// en este está en el /Saluda/ el nombre que quieras, con los : toma como parametro
   
    const elnombre= req.params.nombre;
    res.send(`Hola ${elnombre}`)
    })
    .get("/Place/:zip",async (req:Request, res: Response) => {// recibe una peticion de zip
      const zip= req.params.zip;
      const place= await getPlace(zip)
      res.send(place)
      })

      .get("/tiempo/:zip",async (req:Request, res: Response) => {
        const zip= req.params.zip;
        const place= await getPlace(zip)
        const tiempo= await getTiempo(place)
        res.send(tiempo)
        });

   

miapp.listen(3000)