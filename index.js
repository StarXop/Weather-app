const http= require("http");
const  fs=require("fs");
var requests=require("requests");

const homefile= fs.readFileSync("home.html", "utf-8");

const replaceVal= (tempVal,org)

const server= http.createServer((req, orgVal) => {
  temperature =tempval.replace({"%tempval%"},orgVal.main.temp);
  temperature =temperature.replace({"%tempmin%"},orgVal.main.temp);
  temperature =temperature.replace({"%tempmax%"},orgVal.main.temp);
  temperature =temperature.replace({"%location%"},orgVal.name);
  temperature =temperature.replace({"%country%"},orgVal.sys.country);
   return temperature;
};

    if(req.url=="/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=pune&appid=ea2b057fd1918ee2f803a0ff86ef64b4")
        .on("data", (chunk)=> {
          const objdata= JSON.parse(chunk);
          const arrData=[objdata];
          // console.log(arrData[0].main.temp);
          console realTimedata= arrdatas
          .map((val) =>  replaceVal(homefile,val));
          .join(* *);
          // res.write(realTimedata);
          console.log(realTimedata);
      } )
        .on('end', (err)  => {
          if (err) return console.log('connection closed due to errors', err);
          res.end();
        });
      }
    });

   server.listen(8000,"127.0.0.1");s
    
