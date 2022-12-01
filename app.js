
const express = require('express')
const h = express()

h.use(express.urlencoded({extended: true}))

const externalUrl = process.env.RENDER_EXTERNAL_URL;
const port = externalUrl && process.env.PORT ? parseInt(process.env.PORT) : 3000;



h.get("/", (req, res) => {

  if(externalUrl){
    res.sendfile(__dirname + '/game.html');
  }else{
    res.sendfile(__dirname + '/game.html');
  }
  
})

if (externalUrl) {
    const hostname = 'localhost';
    h.listen(port, hostname, () => {
    console.log(`Server locally running at http://${hostname}:${port}/ and from
    outside on ${externalUrl}`);
    });
    }else {
      h.listen(3000, () => {
        console.log('Server listening on : 3000')
      })
      }