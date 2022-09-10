// import express from "express";


// const app = express
// const port = 3000



// express().get('/', (req: any, res: { send: (arg0: string) => void }) => {
//   res.send('Hello World!')
// })


// express().listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




import express, { Express, Request, Response } from 'express';




const app = express();

var cors = require("cors")
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors())


const port = process.env.PORT || 5456;

app.get('/', (req: Request, res: Response) => {
  
  console.log( req.headers);
  console.log( req.body);

  res.status(200).send(

    // {"ipaddress":req.socket.remoteAddress}
    req.headers
    )


});


app.get("/api/whoami", (req, res)=>{
  
  res.send(
    { 
      "ipaddress":req.socket.remoteAddress,
      "software":req.body["useragent"],
      "language":req.body["accept-language"]
    
    }      
  )

})


app.post('/', (req: Request, res: Response) => {
  
  console.log( req.headers);
  console.log( req.body);

  res.send("Heres")


});



app.listen( port  , () => {  // || port
  console.log(`[server]: Server is running at http://localhost:${port}`);
});








// import express, { Request, Response } from 'express';

// const app = express();
// const port = 3000;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// });
